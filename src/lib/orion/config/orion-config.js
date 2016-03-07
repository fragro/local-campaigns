
/**
 * Initializes the variables, so you can
 * edit them in the admin panel
 */
orion.config.add('AWS_API_KEY', 'aws');
orion.config.add('AWS_API_SECRET', 'aws', { secret: true });
orion.config.add('AWS_S3_BUCKET', 'aws');
/**
 * Sets the credentials when the server starts
 */
if (Meteor.isServer) {
 if(!orion.config.get('AWS_API_KEY')){
	/* default init for s3 */
 	S3.config = {
	  key: 'DEFAULT_KEY',
	  secret: 'DEFAULT_KEY',
	  bucket: 'DEFAULT_KEY',
	};
 }
 else{
 	S3.config = {
	  key: orion.config.get('AWS_API_KEY'),
	  secret: orion.config.get('AWS_API_SECRET'),
	  bucket: orion.config.get('AWS_S3_BUCKET')
	};
 }
} 	
/**
 * Setup the Stripe Config (stripe.com)
 */
orion.config.add('STRIPE_SECRET', 'stripe');
/**
 * Setup the Email SMTP Server Information
 */
orion.config.add('EMAIL_USER', 'email');
orion.config.add('EMAIL_PASS', 'email', { secret: true });
orion.config.add('EMAIL_HOST', 'email');
orion.config.add('EMAIL_PORT', 'email');
orion.config.add('EMAIL_TO', 'email');
/**
 * Setup Meta and OG Tags
 */