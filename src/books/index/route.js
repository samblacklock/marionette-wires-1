import Orchestra from 'orchestra';
import storage from '../storage';

export default Orchestra.Route.extend({
  initialize() {
    this.listenTo(this, 'enter', this.onEnter);
  },

  fetch() {
    return storage.findAll().then(collection => {
      this.collection = collection;
    });
  },

  onEnter() {
    let id = this.collection.first().get('id');
    Orchestra.history.navigate(`books/${id}`, {
      trigger: true,
      replace: true
    });
  }
});
