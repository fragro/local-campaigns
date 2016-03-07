slugify = function(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

arrayToGroups = function(source, groups) {  
	 //This is the array of groups to return:
	 var grouped = [];

	 //work out the size of the group
	 groupSize = Math.ceil(source.length/groups);

	 //clone the source array so we can safely splice it
	 var queue = source;

	 for (var r=0;r<groups;r++) {
	   //Grab the next groupful from the queue, and append it to the array of groups
	   grouped.push(queue.splice(0, groupSize));    		
	 }       
	return grouped;
}
animate = function(idx, animation){
	$("#" + idx).addClass('animated ' + animation);
	$('#' + idx).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
	function(){
		$("#" + idx).removeClass('animated ' + animation)
	});
}
//each with index
UI.registerHelper('addIndex', function (all) {
    return _.map(all, function(val, index) {
        return {index: index, value: val};
    });
});
//wrapper for replace function
UI.registerHelper('replace', function (st, val, repl) {
    return st.replace(val, repl);
});
//plurarlize with a count
UI.registerHelper('pluralize', function (st, cnt) {
    if(cnt > 1 || cnt == 0){
    	return st + 's';
    }
    return st;
});
//determine if subscriptions are ready
UI.registerHelper('subsReady', function (sub) {
    if(sub){
    	return FlowRouter.subsReady(sub);
    }
    else{
    	return FlowRouter.subsReady();
    }
});
//get the username given a user._id
UI.registerHelper('getUsername', function(user_id){
	return Meteor.users.findOne(user_id).username;
});
//strip excess characters from phone
UI.registerHelper('stripPhone', function(val){
    var ret = val.replace(/[^0-9.]/g, "");
    return ret;
});
//strip excess characters from phone
UI.registerHelper('slugify', function(val){
    var ret = slugify(val);
    return ret;
});
UI.registerHelper('checkedIf', function(val) {
  return val ? 'checked' : '';
});
UI.registerHelper('formatAmount', function(amt) {
  return (amt / 100.0).toFixed(2);
});
UI.registerHelper('formatDate', function(amt) {
  return moment(amt).fromNow();
});