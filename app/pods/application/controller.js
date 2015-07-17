import Ember from 'ember';

export default Ember.Controller.extend({

	topWebsites: Ember.computed('model',function(){
		return this.get('model').filterBy('placement','top');
	}),

	bottomWebsites: Ember.computed('model',function(){
		return this.get('model').filterBy('placement','bottom');
	}),
});
