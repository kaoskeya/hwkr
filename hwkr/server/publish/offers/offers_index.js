/*****************************************************************************/
/* OffersIndex Publish Functions
/*****************************************************************************/

Meteor.publish('offers_index', function () {
  // you can remove this if you return a cursor
  return Offers.find()
});

Meteor.publish('users', function () {
  // you can remove this if you return a cursor
  return Meteor.users.find({}, { profile: 1 })
});