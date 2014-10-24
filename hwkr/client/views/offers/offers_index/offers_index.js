/*****************************************************************************/
/* OffersIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.OffersIndex.events({
  'click #filter a': function(e, tmpl) {
    if($(e.target).text() == 'Reset') {
      Session.set('filter' )
      Session.set('filterName' )
    }
    Session.set('filter', $(e.target).data('tag') )
    Session.set('filterName', $(e.target).text() )
  }
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.OffersIndex.helpers({
  offers: function() {
    if( Session.get('filter') )
      return Offers.find({ categories: Session.get('filter') }).fetch();
    else
      return Offers.find({  }).fetch();
  },
  filter: function() {
    return Session.get('filter')
  },
  filterName: function() {
    return (Session.get('filterName')!='')? Session.get('filterName') : 'I am looking for'
  },
  userName: function(uid) {
    //var user = Meteor.users.find({ _id: this.owner }).fetch()
    //console.log( user, user[0].profile )
    Meteor.call('username', uid, function(er, res) {
      Session.set(uid, res);
    })
    return Session.get(uid)
  },
  timeLeft: function() {
    var end = this.validity
    console.log(end, moment().unix(), this._id)
    setInterval(function(){
      //console.log( moment().unix() - this.validity, this._id + '_endsin' )
      Session.set(this._id + '_endsin', end - moment().unix())
    }, 1000)
    return Session.get(this._id + '_endsin')
  },
  canAvail: function() {
    return (moment().unix() - this.validity) > 0
  },
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* OffersIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.OffersIndex.created = function () {
};

Template.OffersIndex.rendered = function () {
};

Template.OffersIndex.destroyed = function () {
};