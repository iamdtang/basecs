import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model() {
    return $.getJSON('/basecs-posts.json');
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('posts', model);
  }
});
