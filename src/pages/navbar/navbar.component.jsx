import React from 'react';
import './navbar.styles.scss';
import { ReactComponent as Arrow } from '../../assets/next-menu.svg';
import { ReactComponent as Cart } from '../../assets/cart-shop.svg';

const NavBar = () => (
    <nav>
        <div className="navbar">
        <div className="container">
            <div className="logo">
                revut.
            </div>
            <div className="dropmenu">
                <Arrow/>
            </div>
            <div className="cart">
                <Cart/>
            </div>
        </div>
        </div>
    </nav>
);

export default NavBar;