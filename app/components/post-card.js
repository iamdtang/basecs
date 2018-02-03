import Component from '@ember/component';

export default Component.extend({
  classNames: ['post-card'],
  init() {
    this._super(...arguments);
    this.set('ordinal', this.get('index') + 1);
  }
});
