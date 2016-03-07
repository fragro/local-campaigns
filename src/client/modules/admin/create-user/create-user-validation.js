resetCreateUser = function(){
	Session.set('create-user', false);
	$('#username').val('');
	Session.set('create-user-err', undefined);
}
getCreateUserData = function(){
	return {username: $('#username').val(), role: $('#role').val()}; 
}
validateCreateUser = function(data){
	var keys = ['username'];
	for(var i in keys){
		if(data[keys[i]] == ''){
			return {err:true, msg: keys[i] + ' is empty.'};
		}
	}
	return {err:false};
}
createUser = function(data){
	Meteor.call('createUserAccount', data, function(err, res){
		if(err){
			Session.set('create-user-err', err.reason);
		}
		else{
			Session.set('create-user-success', true);
			resetCreateUser();
		}
	});
}