Template.issues_in_depth.helpers({
	'issues': function(){
		var li = Issues.find({}, {sort: {order: 1}});
		console.log(li)
		return li;
	}
});