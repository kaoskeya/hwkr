/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/



Router.map(function () {
	this.route('OffersIndex', { path: '/',waitOn: function() {
		return [
			this.subscribe('offers_index'),
			this.subscribe('users')
		]
	} }),
	this.route('OffersAdd', { path: '/add' })
});