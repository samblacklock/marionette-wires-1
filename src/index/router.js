import Orchestra from 'orchestra';
import HeaderService from '../header/service';
import IndexRoute from './route';

export default Orchestra.Router.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  onBeforeEnter() {
    HeaderService.request('activate', {
      path: ''
    });
  },

  routes: {
    '': 'index'
  },

  index() {
    return new IndexRoute({
      container: this.container
    });
  }
});
