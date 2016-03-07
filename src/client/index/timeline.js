Template.campaign_timeline.helpers({
	'timeline': function(){
		var li = Timeline.find({}, {sort: {order: 1}});
		console.log(li)
		return li;
	}
});