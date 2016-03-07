Meteor.methods({
	createUserAccount: function(data){
		console.log(data);
		if (Roles.userHasRole(this.userId, 'admin')) {
			var options = {
				username: data.username,
				email: data.username
			}
			var role = data.role;
			var user_id = Accounts.createUser(options);
			if(user_id){
	      		Roles.addUsersToRoles(user_id, [role]);
	      		Accounts.sendEnrollmentEmail(user_id);
			}
			else{
				throw new Meteor.Error("User not created");
			}
			return;
		}
		throw new Meteor.Error("Do not have permissions");
	},
	getEmails: function(filter){
		if (Roles.userHasRole(this.userId, 'admin')) {
			var t = Volunteer.find(filter).fetch().map(function(i){if(i.email){return i.email}})
			return t;
		}
	}
});