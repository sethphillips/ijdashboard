import Ember from 'ember';

export default Ember.Route.extend({

	model: function()
	{
		return this.store.findAll('website');
	},

	activate:function()
	{
		// Ember.$( document ).idleTimer( 30000 );
	},
});
