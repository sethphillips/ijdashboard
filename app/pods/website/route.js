import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params)
	{
		return this.store.find('website',params.website_id);
	},

	actions:{
		closeWebsite:function()
		{
			this.transitionTo('index');
		},
	}
});
