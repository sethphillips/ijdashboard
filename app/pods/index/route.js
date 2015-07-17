import Ember from 'ember';

export default Ember.Route.extend({

	model: function()
	{
		return Ember.RSVP.hash({
			videos: this.store.findAll('video'),
			websites: this.store.findAll('website'),
		});
	},

	afterModel: function()
	{
		

		Ember.$( document ).on( "idle.idleTimer", function(event, elem, obj){
        	this.transitionTo('sleep');
	    }.bind(this));
	},

	deactivate:function()
	{
		Ember.$( document ).off( "idle.idleTimer");
	}

});
