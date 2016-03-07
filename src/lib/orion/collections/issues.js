Issues = new orion.collection('Issues', {
  singularName: 'Issue', // The name of one of these items
  pluralName: 'Issues', // The name of more than one of these items
  title: 'Issues', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: 'Issues'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
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
Issues.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),
  template: {
    type: String,
    allowedValues: ['issues_left', 'issues_right']
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
Issues.allow({
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