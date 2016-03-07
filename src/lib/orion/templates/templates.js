orion.pages.addTemplate({
    layout: 'facts',
    template: 'issues_list',
    name: 'Issues List Holder',
    description: 'List of Facts'
}, {
    header: orion.attribute('summernote', {
      label: 'Header'
    }),
	footer: orion.attribute('summernote', {
      label: 'Footer'
    }),
    type: {
      type: String,
      label: 'Type',
  	}
})
orion.pages.addTemplate({
    layout: 'facts',
    template: 'about_us',
    name: 'About Us',
    description: 'About Us'
}, {
    header: orion.attribute('summernote', {
      label: 'Header'
    }),
    content: orion.attribute('summernote', {
      label: 'Content'
    }),
	footer: orion.attribute('summernote', {
      label: 'Footer'
    })
})
orion.pages.addTemplate({
    layout: 'facts',
    template: 'information',
    name: 'Information',
    description: 'Information'
}, {
    content: orion.attribute('summernote', {
      label: 'Header'
    })
})