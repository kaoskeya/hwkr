/*
 * Add query methods like this:
 *  Offers.findPublic = function () {
 *    return Offers.find({is_public: true});
 *  }
 */
Offers.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});