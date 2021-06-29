import './App.css';
import HomePage from './pages/homepage/homepage.component';
import NavBar from './pages/navbar/navbar.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument  } from './firebase/firebase.utils';
import React from 'react';
import SignUp from './pages/sign-up/sign-up.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import ErrorPage from './pages/errorpage/errorpage.component';

class App extends React.Component { 

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/error' component={ErrorPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUpPage />
              )
            }/>
          <Route path='/signup' render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignUp />
              )
            } />
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser 
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
