import Orchestra from 'orchestra';
import Model from './model';

export default Orchestra.Collection.extend({
  url: '/api/users',
  model: Model
});
