import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ["video"],

	classNameBindings: ['sleep:sleep'],

	didRender:function()
	{
		var that = this;

		that.$('.video-player').on('ended', function(e){
			Ember.run(function(){
				that.sendAction('ended');
			});
		});

		that.$('.video-player').on('canplay', function(e){
			
			var videoPlayer = document.getElementById('video-playerfff');
			videoPlayer.play();
		});

	},

	willDestroyElement:function()
	{
		this.$('.video-player').off('ended canplay');
	},

	
	
});
