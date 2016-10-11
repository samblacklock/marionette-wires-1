import Orchestra from 'orchestra';
import template from './template.hbs';

export default Orchestra.ItemView.extend({
  template: template,

  initialize(options = {}) {
    this.model = new Orchestra.Model(options);
  },

  triggers: {
    'click .btn-primary' : 'confirm',
    'click .close'       : 'cancel'
  }
});
