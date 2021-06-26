import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart-button/cart-reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});