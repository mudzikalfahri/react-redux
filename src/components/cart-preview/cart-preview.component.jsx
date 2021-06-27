import CustomButton from "../button/button.component";
import React from 'react';
import './cart-preview.styles.scss';
import { ReactComponent as CartArrow } from '../../assets/close-arrow.svg';
import { setToggleCart } from "../../redux/cart-button/cart-actions";
import { connect } from "react-redux";

const CartPreview = ({setToggleCart}) => {
    return (
        <div className='cart-preview'>
            <div className="close" onClick={setToggleCart}>
                My Cart
                <CartArrow/>
            </div>
            <div className="cart-item">
                Your shopping cart is empty.
                <hr/>
            </div>
            
            <CustomButton>Checkout Items</CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    setToggleCart: () => dispatch(setToggleCart())
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(CartPreview);