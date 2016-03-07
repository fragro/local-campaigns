Meteor.methods({
	'check-supply': function(item_id, size, quant){
		var sup = Supply.findOne({item_id:item_id, size: size});
		if(sup){
			return (sup.quantity >= parseInt(quant))
		}
	}
})