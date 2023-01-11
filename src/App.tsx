import React from 'react';
import ProductList from './Products/ProductList';
import store from './store';
import './App.css';
import { Provider } from 'react-redux';
import ProductForm from './Products/productForm';
import Cart from './Cart/cart';

function App() {
  return (
    <>
    <Provider store={store}>
    <div className="App">
      <ProductList/>
      <ProductForm/>
      <Cart/>
    </div>
    </Provider>
    </>
  );
}

export default App;
