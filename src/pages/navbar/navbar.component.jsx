import React from 'react';
import './navbar.styles.scss';
import { ReactComponent as Arrow } from '../../assets/next-menu.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from '../../assets/cart-shop.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

class NavBar extends React.Component{
    constructor() {
        super();
        this.state = {
            toggle:false
        }
}

navToggle = () => {
    this.setState({toggle:!this.state.toggle});
};

resetMenu = () => {
    this.setState({toggle:false})
};

render(){
    return (
        <nav>
            <div className="navbar">
                <div className="menu"
                style={(this.state.toggle) ? ({top:0}) : ({top:-150})}>
                        <div className="menu-link">
                            Sign In
                        </div>
                        <Link to = '/shop' className="menu-link" onClick={this.resetMenu}>
                            Shop
                        </Link>
                        <div className="menu-link">
                            About
                        </div>
                </div>
                <div className="container">
                    <Link to='/' className="logo" onClick={this.resetMenu}>
                        <Logo/>
                    </Link>
                    <button className="dropmenu" onClick={this.navToggle}>
                        <Arrow/>
                    </button>
                    <div className="cart">
                        <Cart/>
                    </div>
                </div>
            </div>
        </nav>
    );
}
}
    


export default NavBar;