/*****************************************************************************/
/* Switchrole Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/switchrole/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
  'switchrole': function() {
  	Roles.addUsersToRoles(this.userId, ['resto'])
  },
  'username': function(uid) {
  	var usr = Meteor.users.findOne({ _id: uid }, { profile: 1 })
  	console.log( usr.profile.name )
  	return usr.profile.name
  }
});