Offers = new Mongo.Collection('offers');
Offers.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	categories: {
		type: String, 
		allowedValues: [ "beer", "cutlery", "coffee", "birthday-cake" ],
		autoform: {
			options: [
			{value: "beer", label: "Beer"},
			{value: "cutlery", label: "Food"},
			{value: "coffee", label: "Coffee"},
			{value: "birthday-cake", label: "Birthday Special"}
			]
		}
	},
	validity: {
		label: 'Offer expires in',
		type: Number,

		autoform: {
			options: [
			{value: moment().add(5, 'minutes').unix(), label: "5 Minutes"},
			{value: moment().add(15, 'minutes').unix(), label: "15 Minutes"},
			{value: moment().add(30, 'minutes').unix(), label: "30 Minutes"},
			{value: moment().add(60, 'minutes').unix(), label: "1 Hour"}
			]
		}
	},
	owner: {
		type: String,
		autoValue: function() {
			return Meteor.userId()
		}
	},
}));
/*
 * Add query methods like this:
 *  Offers.findPublic = function () {
 *    return Offers.find({is_public: true});
 *  }
 */