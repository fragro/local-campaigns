Meteor.methods({
  submitVolunteer: function(data) {

    var additionalParams = {
      createdAt: new Date()
    }

    _.extend(data, additionalParams);
    data._id = Volunteer.insert(data);

    return data;
  }
});

