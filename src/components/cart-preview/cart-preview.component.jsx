import CustomButton from "../button/button.component";
import React from 'react';
import './cart-preview.styles.scss';
import { ReactComponent as CartArrow } from '../../assets/close-arrow.svg';
import { setToggleCart} from "../../redux/cart-button/cart-actions";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const CartPreview = ({setToggleCart, cartItems, sub }) => {
    return (
        <div className='cart-preview'>
            <div className="close" onClick={setToggleCart}>
                My Cart
                <CartArrow/>
            </div>
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                        )))
                        : (<span className='empty'>You have '0' Items in your Cart
                        <br/>To start shopping, choose a shop menu</span>)
                }
                <hr/>
            </div>
            <div className="subtotal">
                <span>Subtotal</span>
                <span>${sub}</span>
            </div>
            
            <CustomButton>Checkout Items</CustomButton>
        </div>
    )
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems:cartItems,
    sub:cartItems.reduce((sub, cartItem) => (sub + cartItem.price*cartItem.quantity),0)
  });

const mapDispatchToProps = dispatch => ({
    setToggleCart: () => dispatch(setToggleCart())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartPreview);