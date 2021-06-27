import React from 'react';
import './navbar.styles.scss';
import { ReactComponent as Arrow } from '../../assets/next-menu.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartButton from '../../components/cart-button/cart-button.component';
import CartPreview from '../../components/cart-preview/cart-preview.component';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
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
                {/* { this.state.toggle ? (
                <div className="menu">
                        {this.props.currentUser ? 
                        <div className='menu-link out' onClick={() => auth.signOut()}>
                        Sign Out</div>
                         : (
                        <Link className='menu-link' to='/signin' onClick={this.resetMenu}>
                        Sign In
                        </Link>
                        )}
                        <Link to = '/shop' className="menu-link" onClick={this.resetMenu}>
                            Shop
                        </Link>
                        <div className="menu-link">
                            About
                        </div>
                </div>
                ) : null
                } */}
                <div className="menu"
                style={(this.state.toggle) ? ({top:0}) : ({top:-200})}>
                        {this.props.currentUser ? 
                        <div className='menu-link out' onClick={() => auth.signOut()}>
                        Sign Out</div>
                         : (
                        <Link className='menu-link' to='/signin' onClick={this.resetMenu}>
                        Sign In
                        </Link>
                        )}
                        <Link to = '/shop' className="menu-link" onClick={this.resetMenu}>
                            Shop
                        </Link>
                        <div className="menu-link">
                            About
                        </div>
                        <div className="menu-link">
                            Contact
                        </div>
                </div>
                <div className="container">
                    <Link to='/' className="logo" onClick={this.resetMenu}>
                        <Logo/>
                    </Link>
                    <button className="dropmenu" onClick={this.navToggle}>
                        <Arrow/>
                    </button>
                    <div className="cart-container">
                        <CartButton/>
                    </div>
                    
                </div>
            </div>
            { this.props.hidden ? null : <CartPreview/>}
            
        </nav>
    );
}
}
    
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });
  
  export default connect(mapStateToProps)(NavBar);