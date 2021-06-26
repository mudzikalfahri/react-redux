import React from 'react';
import './cart-button.styles.scss';
import { ReactComponent as Cart } from '../../assets/cart-shop.svg';
import { setToggleCart } from '../../redux/cart-button/cart-actions';
import { connect } from 'react-redux';

const CartButton = ({setToggleCart}) => {
    return (
        <div className='cart' onClick={setToggleCart}>
            <Cart/>
            <div className="cart-num">
                0
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setToggleCart: () => dispatch(setToggleCart())
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(CartButton);