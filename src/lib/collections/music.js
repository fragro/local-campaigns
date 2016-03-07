Music =  new Mongo.Collection("music");

Music.allow({
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
