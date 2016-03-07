// Email to send to
contactFormConfig.settings.emailTo = orion.config.get('EMAIL_TO');

contactFormConfig.settings.customSubject = function(params) {
  return 'Message from ' + params.name + 'via contact form';
}

// server/smtp.js
Meteor.startup(function () {
	process.env.MAIL_URL = "smtp://" + orion.config.get('EMAIL_USER') + ":" + orion.config.get('EMAIL_PASS') + "@" + orion.config.get('EMAIL_HOST') + ":" + orion.config.get('EMAIL_PORT');
});