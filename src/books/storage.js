import Orchestra from 'orchestra';
import Model from './model';
import Collection from './collection';

const BooksStorage = Orchestra.Storage.extend({
  model: Model,
  collection: Collection
});

export default new BooksStorage();
