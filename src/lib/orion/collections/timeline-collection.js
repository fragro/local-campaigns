Timeline = new orion.collection('timeline', {
  singularName: 'Timeline', // The name of one of these items
  pluralName: 'Timeline', // The name of more than one of these items
  title: 'Timeline', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: 'Timeline'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      { data: "template", title: "Template" },
      { data: "date", title: "Date" },
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
Timeline.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  date: {
    type: String
  },
  template: {
    type: String,
    allowedValues: ['timeline-inverted', 'timeline-standard-orientation']
  },
  body: orion.attribute('summernote', {
      label: 'Body'
  }),
  createdBy: orion.attribute('createdBy'),
  order: {
    type: Number
  },
}));

Timeline.allow({
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