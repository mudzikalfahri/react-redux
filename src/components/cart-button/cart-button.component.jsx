import React from 'react';
import './cart-button.styles.scss';
import { ReactComponent as Cart } from '../../assets/cart-shop.svg';
import { setToggleCart } from '../../redux/cart-button/cart-actions';
import { connect } from 'react-redux';

const CartButton = ({setToggleCart, cartItems}) => {
    return (
        <div className='cart' onClick={setToggleCart}>
            <Cart/>
            <div className="cart-num">
                {cartItems.length}
            </div>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
  });

const mapDispatchToProps = dispatch => ({
    setToggleCart: () => dispatch(setToggleCart())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartButton);