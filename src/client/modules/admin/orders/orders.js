Template.order_listing.helpers({
	orders: function(){
		return Orders.find({completed:false}, {order: {created:-1}})
	}
})
Template.order_item.events = {
	'click [data-action="pack-order"]': function(){
		Session.set('packing-id', this._id);
	},
	'click [data-action="packed-and-ready"]': function(evt, template){
		//set this order as staged to be mailed
		Orders.update(this._id, {$set: {staged: true, packed_by: Meteor.user().username, packed_on: new Date()}})
		Session.set('packing-id', undefined);
	},
	'click [data-action="end-pack-order"]': function(){
		Session.set('packing-id', undefined);
	},
	'click [data-action="ship"]': function(){
		Orders.update(this._id, {$set: {completed: true, shipped_by: Meteor.user().username, shipped_on: new Date()}})
	}
}
Template.order_item.helpers({
	packing_id: function(){
		return Session.get('packing-id');
	}
})

Template.complete_order_listing.helpers({
	orders: function(){
		return Orders.find({completed:true}, {order: {created:1}})
	}
})