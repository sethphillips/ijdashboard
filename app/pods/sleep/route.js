import Ember from 'ember';

export default Ember.Route.extend({

	actions:{
		// ended: function()
		// {
		// 	this.transitionTo('index');
		// },
		closeVideo: function()
		{
			this.transitionTo('index');
		}
	}
});
