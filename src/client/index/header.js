Template.header_inner.helpers({
	cart: function(){
		return Session.get('cart');
	}
})
Template.header_inner.events = {
	'click [data-action="logout"]': function(){
		Meteor.logout(function(){
			FlowRouter.go('/');
		})
	}
}
Template.header_inner.rendered = function(){
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}