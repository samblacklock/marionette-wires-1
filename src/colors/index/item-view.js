import Orchestra from 'orchestra';
import template from './item-template.hbs';

export default Orchestra.ItemView.extend({
  tagName: 'a',
  template: template,
  className: 'colors__item list-group-item',

  attributes() {
    return {
      href: `#colors/${this.model.get('id')}`
    };
  },

  modelEvents: {
    all: 'render'
  }
});
