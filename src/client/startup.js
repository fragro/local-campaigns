Meta.config({
  options: {
    title: orion.dictionary.get('site.title')
  }
});

Meteor.startup(function () {
    sAlert.config({
        effect: 'bouncyflip',
        position: 'bottom',
        timeout: 5000,
        html: true,
        onRouteClose: true,
        stack: true,
        offset: 0
    });
    //for custom contact form error/success notification
    Session.set('successTemplate', 'customContactSuccessTemplate');
});
