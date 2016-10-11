import Orchestra from 'orchestra';
import View from './view';

export default Orchestra.Route.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  render() {
    this.view = new View();
    this.container.show(this.view);
  }
});
