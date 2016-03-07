Template.create_user_form.helpers({
	err: function(){
		return Session.get('create-user-err');
	},
	success: function(){
		return Session.get('create-user-success');
	}
})
Template.create_user_form.events = {
	'click #cancel-user': function(e){
		e.preventDefault()
		resetCreateUser();
	},
	'click #add-user': function(e){
		e.preventDefault()
		var data = getCreateUserData();
		var valid = validateCreateUser(data);
		if(valid.err){
			Session.set('create-user-err', valid.msg);
		}
		else if(!valid.err){
			createUser(data);
		}
	},

}