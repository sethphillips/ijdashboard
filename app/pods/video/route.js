import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params)
	{
		return this.store.find('video',params.video_id);
	},

	actions:{
		ended: function()
		{
			this.transitionTo('index');
		},
		closeVideo: function()
		{
			this.transitionTo('index');
		}
	}
});
