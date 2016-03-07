Template.landing.helpers({
	'landing_items': function(){
		var li = Landing_Items.find({}, {sort: {order: 1}});
		console.log(li)
		return li;
	},
	'partners': function(){
		var li = Partners.find({}, {sort: {order: 1}});
		console.log(li)
		return li;
	}
})
Template.testimonials.helpers({
	'testimonial_items': function(){
		var li = Testimonials.find({}, {sort: {order: 1}});
		console.log(li)
		return li;
	}
});
Template.landing.rendered = function(){
	prepBackend();
}