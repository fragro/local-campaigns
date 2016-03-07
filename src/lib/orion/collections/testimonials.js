Testimonials = new orion.collection('testimonials', {
  singularName: 'Testimonial', // The name of one of these items
  pluralName: 'Testimonials', // The name of more than one of these items
  title: 'Testimonials', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: 'Testimonials'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      { data: "name", title: "Name" },
      { data: "location", title: "Location" },
      { data: "template", title: "Template" },
      orion.attributeColumn('image', 'image', 'Image'),
      orion.attributeColumn('summernote', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
      { data: "order", title: "Order" },
    ]
  }
});
/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Testimonials.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  name: {
    type: String
  },
  location: {
    type: String
  },
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),
  template: {
    type: String,
    allowedValues: ['testimonial_a']
  },
  body: orion.attribute('summernote', {
      label: 'Body'
  }),
  createdBy: orion.attribute('createdBy'),
  order: {
    type: Number
  },
}));


// In a file loaded on the server (ignored on the client)
Testimonials.allow({
  insert: function (userId, post) {
    if (Roles.userHasRole(userId, 'admin')) {
      return true;
    }
  },
  remove: function (userId, post) {
    if (Roles.userHasRole(userId, 'admin')) {
      return true;
    }
  },
  update: function (userId, post) {
    if (Roles.userHasRole(userId, 'admin')) {
      return true;
    }
  }
});