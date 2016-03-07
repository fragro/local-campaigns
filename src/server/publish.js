Meteor.publish("supply", function () {
	return Supply.find();
});

Meteor.publish("timeline", function () {
	return Timeline.find();
});

Meteor.publish("partners", function () {
	return Partners.find();
});

Meteor.publish("landing_items", function () {
	return Landing_Items.find();
});

Meteor.publish("events", function () {
	return Events.find();
});

Meteor.publish("issues", function () {
	return Issues.find();
});

Meteor.publish("testimonials", function () {
	return Testimonials.find();
});

Meteor.publish("orders", function () {
  	if (Roles.userHasRole(this.userId, 'admin')) {
		return Orders.find();
	}
	this.ready();
});

Meteor.publish("users", function () {
  	if (Roles.userHasRole(this.userId, 'admin')) {
		return Meteor.users.find({}, {fields: {username: 1, emails:1}});
	}
	this.ready();
});

Meteor.publish("items", function () {
	return Items.find();	
});

Meteor.publish("sites", function () {
	return Sites.find();	
});

Meteor.publish("volunteers", function () {
  	if (Roles.userHasRole(this.userId, 'admin')) {
		return Volunteer.find();	
	}
	this.ready();
});

Meteor.publish("my_volunteers", function (offset, limit, options) {
	var searchStr = options.search;
	var filter = options.filter;
	var sort = options.sort;
	var cursorOptions = {limit: limit, skip:offset};
	var filterDict = {};
	if(searchStr){
		filterDict["$text"] = {$search: searchStr};
	}
	if(sort){
		cursorOptions["sort"] = getVolunteerSort(sort);
		var filt = {};
		if(sort === "never-contacted"){
			filterDict.last_contacted = { $exists: false };
		}
		else if(sort === "least-contacted" || sort === "last-contacted"){
			filterDict.last_contacted = { $exists: true };
		}
	}
  	if (Roles.userIsInRole(this.userId, ['organizer'])) {
  		//filtering for organizers
		var user = Meteor.users.findOne(this.userId);
		var volunteer = Volunteer.findOne({email: user.username});
		filterDict["assigned"] = volunteer._id;
		var volunteers = Volunteer.find(filterDict, cursorOptions);
		Counts.publish(this, 'total_volunteers', volunteers);
		return Volunteer.find(filterDict, cursorOptions);
	}
	if (Roles.userHasRole(this.userId, 'admin')) {
		//filtering for administrators
		if(filter){
			if(filter == "regional-organizer"){
				filterDict["regional-organizer"] = true;
			}
			else if(filter == "notary"){
				filterDict["notary"] = true;
			}
			else if(filter == "business-owner"){
				filterDict["business-owner"] = true;
			}
		}
		console.log(cursorOptions)
		var volunteers = Volunteer.find(filterDict, cursorOptions);
		Counts.publish(this, 'total_volunteers', volunteers)
		return Volunteer.find(filterDict, cursorOptions);;
	}
	this.ready();
});

Meteor.publish('my_volunteer_acct', function(){
	var user = Meteor.users.findOne(this.userId);
	return Volunteer.find({email: user.username});
})