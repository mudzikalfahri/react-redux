import CustomButton from "../button/button.component";
import React from 'react';
import './cart-preview.styles.scss';
import { ReactComponent as CartArrow } from '../../assets/close-arrow.svg';
import { setToggleCart } from "../../redux/cart-button/cart-actions";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const CartPreview = ({setToggleCart, cartItems }) => {
    return (
        <div className='cart-preview'>
            <div className="close" onClick={setToggleCart}>
                My Cart
                <CartArrow/>
            </div>
            <div className="cart-items">
                {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
                ))}
                <hr/>
            </div>
            <div className="subtotal">
                <span>Subtotal</span>
                <span>$340</span>
            </div>
            
            <CustomButton>Checkout Items</CustomButton>
        </div>
    )
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
  });

const mapDispatchToProps = dispatch => ({
    setToggleCart: () => dispatch(setToggleCart())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartPreview);