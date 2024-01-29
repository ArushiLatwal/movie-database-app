// index.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import wishlistReducer from '../reducers/wishlistReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
