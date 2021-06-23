import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';
import './shop.styles.scss';
import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        <div className="cathegory-list">
          <div className="catall">All Products</div>
          <div className="cat1">T-Shirt</div>
          <div className="cat2">Footwear</div>
          <div className="cat3">Pants</div>
        </div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;