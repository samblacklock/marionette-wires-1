import Orchestra from 'orchestra';
import HeaderService from '../header/service';
import LayoutView from './layout-view';
import IndexRoute from './index/route';
import ShowRoute from './show/route';

export default Orchestra.Router.extend({
  initialize(options = {}) {
    this.container = options.container;
    this.listenTo(this, 'before:enter', this.onBeforeEnter);

    HeaderService.request('add', {
      name: 'Users',
      path: 'users',
      type: 'primary'
    });
  },

  onBeforeEnter() {
    this.layout = new LayoutView();
    this.container.show(this.layout);
    HeaderService.request('activate', {
      path: 'users'
    });
  },

  routes: {
    'users'     : 'index',
    'users/:id' : 'show'
  },

  index() {
    return new IndexRoute();
  },

  show() {
    return new ShowRoute({
      layout: this.layout
    });
  }
});
