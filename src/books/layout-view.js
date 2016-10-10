import Orchestra from 'orchestra';
import template from './layout-template.hbs';

export default Orchestra.LayoutView.extend({
  template: template,
  className: 'container',
  regions: {
    library : '.books__library',
    viewer  : '.books__viewer'
  }
});
