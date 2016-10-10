import Orchestra from 'orchestra';
import ItemView from './item-view';

export default Orchestra.CollectionView.extend({
  childView: ItemView,
  className: 'container'
});
