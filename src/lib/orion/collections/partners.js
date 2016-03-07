Partners = new orion.collection('Partners', {
  singularName: 'Partner', // The name of one of these items
  pluralName: 'Partners', // The name of more than one of these items
  title: 'Partners', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: 'Partners'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "name", title: "Name" },
      { data: "link", title: "Link" },
      orion.attributeColumn('image', 'image', 'Image'),
    ]
  }
});
/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Partners.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  link: {
    type: String
  },
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  })
}));


// In a file loaded on the server (ignored on the client)
Partners.allow({
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