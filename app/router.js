import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('video',{path:'video/:video_id'});
  this.route('website',{path:'website/:website_id'});
  this.route('sleep');
});

export default Router;
