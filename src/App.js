import './App.css';
import HomePage from './pages/homepage/homepage.component';
import NavBar from './pages/navbar/navbar.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-up/sign-in-up.component';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
