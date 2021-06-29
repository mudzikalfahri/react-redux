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
        <div className="cathegory-list">
          <div className="catall" onClick={()=>this.setState({cat:3})}>All Products</div>
          <div className="cat1" onClick={()=>this.setState({cat:0})}>T-Shirt</div>
          <div className="cat2" onClick={()=>this.setState({cat:1})}>Footwear</div>
          <div className="cat3" onClick={()=>this.setState({cat:2})}>Jackets</div>
        </div>
        {collections.filter((collect,ids) => this.state.cat<3 ? ids===this.state.cat : true).map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;