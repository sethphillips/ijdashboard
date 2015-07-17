import Ember from 'ember';

export default Ember.Controller.extend({

	mainWebsites: Ember.computed('model.websites',function(){
		return this.get('model.websites').filterBy('placement','main');
	}),
});
