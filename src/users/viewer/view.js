import Orchestra from 'orchestra';
import template from './template.hbs';

export default Orchestra.ItemView.extend({
  template: template,
  modelEvents: {
    all: 'render'
  }
});
