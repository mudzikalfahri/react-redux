import React from 'react';
import { addItem } from '../../redux/cart-button/cart-actions';
import { connect } from 'react-redux';
import './collection-item.styles.scss';

const CollectionItem = ({item, title, addItem}) => {
  const { name, price, imageUrl } = item;
  return(
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
        <span className='title-footer'>{title}</span>
        <span className='name'>{name}</span>
        <span className='price'>$ {price}</span>
        <button className='addcart' onClick={() => addItem(item)}>Add to cart</button>
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