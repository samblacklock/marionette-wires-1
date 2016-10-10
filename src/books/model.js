import Orchestra from 'orchestra';

export default Orchestra.Model.extend({
  urlRoot: '/api/books',
  isActive() {
    return this.collection.active === this;
  }
});
