import React from 'react';
import { addItem } from '../../redux/cart-button/cart-actions';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { ReactComponent as Cart } from '../../assets/cart-shop.svg';

const CollectionItem = ({item, title, addItem}) => {
  const { name, price, imageUrl } = item;
  return(
  <div className='collection-item'>
    <LazyLoadComponent>
      <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
    </LazyLoadComponent>
    
    <div className='collection-footer'>
        <div className="name-pr">
          <span className='name'>{name}</span>
          <span className='price'>$ {price}</span>
        </div>
        <button className='addcart' onClick={() => addItem(item)}>
          <Cart className='cart'/>
          </button>
    </div>
  </div>
)};


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);