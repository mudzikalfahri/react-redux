import React from 'react';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import './cart-item.styles.scss';
import { clearItemFromCart } from "../../redux/cart-button/cart-actions";
import {connect } from 'react-redux';

const CartItem = ({ item, clearItem}) => {
  const { price, name, quantity } = item;
  return (
  <div className='cart-item'>
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
      <Delete className='delete' onClick={() => clearItem(item)}/>
    </div>
  </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});



export default connect(null,mapDispatchToProps)(CartItem);