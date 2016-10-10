import Orchestra from 'orchestra';
import Collection from './collection';
import CollectionView from './collection-view';

const FlashesService = Orchestra.Service.extend({
  setup(options = {}) {
    this.container = options.container;
  },

  start() {
    this.collection = new Collection();
    this.view = new CollectionView({
      collection: this.collection
    });
    this.container.show(this.view);
  },

  requests: {
    add: 'add',
    remove: 'remove',
  },

  add(flash) {
    this.collection.add(flash);
  },

  remove(flash) {
    const model = this.collection.findWhere(flash);
    if (model) {
      model.destroy();
    }
  }
});

export default new FlashesService();
