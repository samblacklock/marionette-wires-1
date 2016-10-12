import Orchestra from 'orchestra';

export default Orchestra.Model.extend({
  urlRoot: '/api/users',
  isActive() {
    return this.collection.active === this;
  }
});
