orion.dictionary.addDefinition('header', 'campaign_timeline', {
  type: String,
  label: 'Header'
});
orion.dictionary.addDefinition('sub_header', 'campaign_timeline',  
	orion.attribute('summernote', {
      label: 'Sub Header',
      optional: true
}));
orion.dictionary.addDefinition('event_main_text', 'campaign_timeline',  
	orion.attribute('summernote', {
      label: 'Campaign 2016 Event Description',
      optional: true
}));
orion.dictionary.addDefinition('id', 'petition', {
  type: String,
  label: 'Current Petition ID'
});