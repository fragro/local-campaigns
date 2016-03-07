Volunteer =  new Mongo.Collection("volunteer");

Volunteer.allow({
  insert: function (userId, post) {
  	return true;
  },
  remove: function (userId, post) {
  	if (Roles.userHasRole(userId, 'admin')) {
  		return true;
  	}
  },
  update: function (userId, post) {
  	if (Roles.userHasRole(userId, 'admin')) {
  		return true;
  	}
  }
});

Sites =  new Mongo.Collection("site");

Sites.allow({
  insert: function (userId, post) {
    return true;
  },
  remove: function (userId, post) {
    if (Roles.userHasRole(userId, 'admin') || post.user === userId) {
      return true;
    }
  },
  update: function (userId, post) {
    if (Roles.userHasRole(userId, 'admin') || post.user === userId) {
      return true;
    }
  }
});