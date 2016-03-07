Landing_Items = new orion.collection('landing_items', {
  singularName: 'Landing Item', // The name of one of these items
  pluralName: 'Landing Items', // The name of more than one of these items
  title: 'Landing Items', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: 'Landing Items'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      { data: "template", title: "Template" },
      { data: "image_source", title: "Image Source" },
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
Landing_Items.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  template: {
    type: String,
    allowedValues: ['forwards', 'backwards', 'call_to_action']
  },
  image_source: {
    type: String,
    optional:true
  },
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),
  body: orion.attribute('summernote', {
      label: 'Body'
  }),
  createdBy: orion.attribute('createdBy'),
  order: {
    type: Number
  },
}));

Landing_Items.allow({
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