orion.dictionary.addDefinition('success_image', 'contact',
  orion.attribute('image', {
      label: 'Contact Success Image',
      optional: true
  })
);
orion.dictionary.addDefinition('success_header', 'contact', {
  type: String,
  label: 'Contact Success Header'
});
orion.dictionary.addDefinition('success_text', 'contact',  
	orion.attribute('summernote', {
      label: 'Contact Success Text',
      optional: true
}));