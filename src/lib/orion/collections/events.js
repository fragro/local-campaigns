Events = new orion.collection('events', {
  singularName: 'Event', // The name of one of these items
  pluralName: 'Events', // The name of more than one of these items
  title: 'Events', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: 'Events'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      { data: "address", title: "Address" },
      { data: "time", title: "Time" },
      { data: "date", title: "Date" },
      orion.attributeColumn('image', 'image', 'Image'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
    ]
  }
});
/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Events.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  address: {
    type: String
  },
  time: {
    type: String
  },
  date: {
    type: String
  },
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),
  createdBy: orion.attribute('createdBy')
}));


// In a file loaded on the server (ignored on the client)
Events.allow({
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