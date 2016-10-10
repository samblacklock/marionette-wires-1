import Orchestra from 'orchestra';
import Model from './model';

export default Orchestra.Collection.extend({
  url: '/api/colors',
  model: Model
});
