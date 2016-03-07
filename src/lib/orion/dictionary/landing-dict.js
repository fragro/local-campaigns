orion.dictionary.addDefinition('header', 'landing', {
  type: String,
  label: 'Header'
});
orion.dictionary.addDefinition('sub_header', 'landing', {
  type: String,
  label: 'Sub Header'
});
orion.dictionary.addDefinition('call_to_action', 'landing', {
  type: String,
  label: 'Call to Action Header'
});
orion.dictionary.addDefinition('call_to_action_sub', 'landing',
	orion.attribute('summernote', {
      label: 'Call to Action Content',
      optional: true
}));
orion.dictionary.addDefinition('about_me_main', 'landing',  
	orion.attribute('summernote', {
      label: 'About Me Main',
      optional: true
}));
orion.dictionary.addDefinition('issues_learn_more', 'landing', {
  type: String,
  label: 'Spotlight Issues Learn More'
});
orion.dictionary.addDefinition('issues_header', 'landing', {
  type: String,
  label: 'Spotlight Issues Header'
});
orion.dictionary.addDefinition('issues_link', 'landing', {
  type: String,
  label: 'Spotlight Issues Link'
});
orion.dictionary.addDefinition('issues_image', 'landing',  
	orion.attribute('image', {
      label: 'Spotlight Issues Image'
}));
orion.dictionary.addDefinition('election_learn_more', 'landing', {
  type: String,
  label: 'Spotlight Election Learn More'
});
orion.dictionary.addDefinition('election_header', 'landing', {
  type: String,
  label: 'Spotlight Election Header'
});
orion.dictionary.addDefinition('election_link', 'landing', {
  type: String,
  label: 'Spotlight Election Link'
});
orion.dictionary.addDefinition('election_image', 'landing',  
	orion.attribute('image', {
      label: 'Spotlight Election Image'
}));
orion.dictionary.addDefinition('election_primary_text', 'landing', {
  type: String,
  label: 'Spotlight Election Primary Text'
});
orion.dictionary.addDefinition('donate_header', 'landing', {
  type: String,
  label: 'Spotlight Donate Header'
});
orion.dictionary.addDefinition('donate_link', 'landing', {
  type: String,
  label: 'Spotlight Donate Link'
});
orion.dictionary.addDefinition('donate_learn_more', 'landing', {
  type: String,
  label: 'Spotlight Donate Learn More'
});
orion.dictionary.addDefinition('donate_image', 'landing',  
	orion.attribute('image', {
      label: 'Spotlight Donate Image'
}));