import Orchestra from 'orchestra';
import template from './item-template.hbs';

export default Orchestra.ItemView.extend({
  template: template,
  tagName: 'a',

  attributes() {
    return {
      class : `list-group-item ${(this.model.isActive() ? 'active' : '')}`,
      href  : `#books/${this.model.get('id')}`
    };
  }
});
