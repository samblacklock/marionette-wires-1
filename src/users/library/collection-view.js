import Orchestra from 'orchestra';
import ItemView from './item-view';

export default Orchestra.CollectionView.extend({
  className: 'list-group',
  childView: ItemView
});
