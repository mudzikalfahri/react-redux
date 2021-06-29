import React from 'react';
import './cart-button.styles.scss';
import { ReactComponent as Cart } from '../../assets/cart-shop.svg';
import { setToggleCart } from '../../redux/cart-button/cart-actions';
import { connect } from 'react-redux';

const CartButton = ({setToggleCart, cartItems}) => {
    return (
        <div className='cart' onClick={setToggleCart}>
            <div className="cart-num">
                {cartItems}
            </div>
            <Cart/>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems: cartItems.reduce((quantity, cartItem) => (quantity + cartItem.quantity), 0)
  });

const mapDispatchToProps = dispatch => ({
    setToggleCart: () => dispatch(setToggleCart())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartButton);