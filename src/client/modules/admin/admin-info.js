Template.admin_info_dashboard.helpers({
	open_orders: function(){
		return Orders.find({completed:true}).count()

	},
	volume: function(){
		var orders = Orders.find().fetch();
		var volume = 0;
		orders.map(function(o){
			volume += o.charge.amount;
		});
		return volume / 100.0;
	},
	supply: function(){
		var supply = Supply.find().fetch();
		var volume = 0;
		supply.map(function(o){
			volume += parseInt(o.quantity);
		});
		return volume;
	},
	users: function(){
		return Meteor.users.find().count();
	}
})
Template.admin_info_dashboard.events = {
	'click [data-action="create-user"]': function(evt){
		evt.preventDefault();
		Session.set('create-user', true);
		Session.set('create-user-success', undefined);
	},
	'click [data-action="activate-email"]': function(evt){
		evt.preventDefault();
		Session.set('grabbing-emails', true);
		Session.set('email-data', undefined);
		Meteor.call("getEmails", {}, function(err,res){Session.set('email-data', res.join(', '))})
	}
}
Template.admin_info_dashboard.rendered = function(){
	Session.set('create-user', false);
	Session.set('grabbing-emails', false);
}
Template.email_view.helpers({
	email_data: function(){
		return Session.get('email-data');
	}
})
Template.email_view.events = {
	'click [data-action="cancel-email-grab"]': function(evt){
		evt.preventDefault();
		Session.set('grabbing-emails', false);
	}
}