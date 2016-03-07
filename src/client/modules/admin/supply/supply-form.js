Template.supply_form.helpers({
	error: function(){
		return Session.get('supply-error');
	},
	id_choices: function(){
		var items = Items.find();
		var ids = items.map(function(i){
			return i.slug;
		})
		return ids;
	},
	size_choices: function(){
		var item_id = Session.get('item_id');
		var item = Items.findOne({slug:item_id});
		if(item){
			//remove empty size
			var i = item.sizes;
			i = i.splice(1, i.length-1); 
			return i;
			//return ['--', 'S', 'M', 'L', 'XL', 'XXL']
		}
	}
})
Template.supply_form.events = {
	'click [data-action="add-supply"]': function(evt){
		evt.preventDefault();
		var item_id = $('#item-id').val();
		var quant = $('#quantity').val();
		var size = $('#size').val();
		//test to make sure admin isnt drunk
		if(isNaN(parseInt(quant))){
			Session.set('supply-error', "Are you drunk or something? That's not a number.");
			return;
		}
		var newSupply = {item_id:item_id, quantity: parseInt(quant), size:size};
		//first we try to find the supply with the corresponding size and item_id
		var exists = Supply.findOne({item_id:item_id, size:size});
		if(exists){
			var quantInt = parseInt(quant);
			//increment the Supply count
			var quantInt = Math.max(quantInt, 0);
			Supply.update(exists._id, {$inc: {quantity: quantInt}});
		}
		else{
			Supply.insert(newSupply);
		}
		Session.set('admin-view', 'supply');
	},
	'change #item-id': function(evt){
		var newValue = $(evt.target).val();
		Session.set('item_id', newValue);
	}
}
Template.supply_form.rendered = function(){
	Session.set('supply-error', undefined);
}