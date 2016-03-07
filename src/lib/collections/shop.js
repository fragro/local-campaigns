Supply = new Mongo.Collection("supply");
Orders = new Mongo.Collection("orders");
Items = new Mongo.Collection("items");
// In a file loaded on the server (ignored on the client)
Supply.allow({
  insert: function (userId, post) {
  	if (Roles.userHasRole(userId, 'admin')) {
  		return true;
  	}
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

Orders.allow({
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

// In a file loaded on the server (ignored on the client)
Items.allow({
  insert: function (userId, post) {
    if (Roles.userHasRole(userId, 'admin')) {
      return true;
    }
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