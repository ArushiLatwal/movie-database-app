// App.js
import React from 'react';
import { Provider } from 'react-redux';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import store from './store';
import './styles.css'; // Import the CSS file

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Shopping App</h1>
        <ProductList />
        <Cart />
        <Wishlist />
      </div>
    </Provider>
  );
};

export default App;
