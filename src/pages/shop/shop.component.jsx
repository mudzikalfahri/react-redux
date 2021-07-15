import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';
import './shop.styles.scss';
import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
      cat:3
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.filter((collect,ids) => this.state.cat<3 ? ids===this.state.cat : true).map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;