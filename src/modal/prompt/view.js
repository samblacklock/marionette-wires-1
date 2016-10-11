import Orchestra from 'orchestra';
import template from './template.hbs';

export default Orchestra.ItemView.extend({
  template: template,
  tagName: 'form',

  ui: {
    input: 'input'
  },

  initialize(options = {}) {
    this.model = new Orchestra.Model(options);
  },

  triggers: {
    'click .btn-default' : 'cancel',
    'click .close'       : 'cancel'
  },

  events: {
    submit: 'submit'
  },

  submit(e) {
    e.preventDefault();
    const val = this.ui.input.val();
    this.trigger('submit', val);
  }
});
