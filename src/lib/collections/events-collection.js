/*Events = new Mongo.Collection("events");

Events.allow({
  insert: function (userId, post) {
  	if (Roles.userIsInRole(userId, ['admin'])) {
  		return true;
  	}
  },
  remove: function (userId, post) {
  	if (Roles.userIsInRole(userId, ['admin'])) {
  		return true;
  	}
  },
  update: function (userId, post) {
  	if (Roles.userIsInRole(userId, ['admin'])) {
  		return true;
  	}
  }
});*/