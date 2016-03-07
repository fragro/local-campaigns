orion.dictionary.addDefinition('title', 'site', {
  type: String,
  label: 'Title'
});
orion.dictionary.addDefinition('description', 'site', {
  type: String,
  label: 'Description'
});
orion.dictionary.addDefinition('address', 'site', {
  type: String,
  label: 'Address'
});
orion.dictionary.addDefinition('logo', 'site',
  orion.attribute('image', {
      label: 'Site Logo',
      optional: true
  })
);
orion.dictionary.addDefinition('our_allies', 'site', {
  type: String,
  label: 'Ally Text'
});

orion.dictionary.addDefinition('facebook_url', 'site', {
  type: String,
  label: 'Facebook Url'
});
orion.dictionary.addDefinition('twitter_url', 'site', {
  type: String,
  label: 'Twitter Url'
});
orion.dictionary.addDefinition('linkedin_url', 'site', {
  type: String,
  label: 'LinkedIn Url'
});
orion.dictionary.addDefinition('googleplus_url', 'site', {
  type: String,
  label: 'Google Plus Url'
});