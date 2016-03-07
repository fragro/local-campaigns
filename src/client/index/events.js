Template.landing_events.helpers({
	'events': function(){
		var li = Events.find({}, {sort: {order: 1}});
		console.log(li)
		return li;
	}
})