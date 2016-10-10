import Orchestra from 'orchestra';
import Model from './model';

export default Orchestra.Collection.extend({
  url: '/api/books',
  model: Model
});
