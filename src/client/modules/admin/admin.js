Template.admin.helpers({
	user: function(){
		return Meteor.user();
	}
})
Template.admin_portal.helpers({
	view: function(){
		return Session.get('admin-view');
	},
	empty_session: function(){
		return Session.equals('admin-view', undefined);
	}
});
Template.admin_portal.rendered = function(){
	Session.set('admin-view', undefined);
}
Template.admin_nav.events = {
	'click [data-action="set-view"]': function(evt){
		Session.set('admin-view', $(evt.target).data('id'));
	}
}
Template.admin_view_plus.helpers({
	go_back: function(){
		var user = Meteor.user();
		if(!Session.equals('admin-view', undefined) && Roles.userIsInRole(user, ['admin','organizer'])){
			return true;
		}
	}
})
Template.admin_view_plus.events = {
	'click [data-action="go-back"]': function(e){
		e.preventDefault();
		Session.set('admin-view', undefined);
	},
	'click [data-action="go-home"]': function(e){
		e.preventDefault();
		FlowRouter.go('/');
	}
}
Template.email_view.helpers({
	email_data: function(){
		return Session.get('email-data')
	}
})
Template.email_view.events = {
	'click [data-action="cancel-email-grab"]': function(){
		Session.set('grabbing-emails', false);
	}
}