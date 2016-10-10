import Orchestra from 'orchestra';
import View from './view';
import storage from '../storage';

export default Orchestra.Route.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  fetch(id) {
    return storage.find(id).then(model => {
      this.model = model;
    });
  },

  render() {
    this.view = new View({
      model: this.model
    });
    this.container.show(this.view);
  }
});
