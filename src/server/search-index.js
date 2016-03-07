if (Meteor.isServer) {
  Volunteer._ensureIndex({
    "lastname": "text",
    "firstname": "text",
    "county": "text",
    "email": "text",
    "address": "text"
  });
}