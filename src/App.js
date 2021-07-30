import React, { } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/Items/ItemDetailContainer'
import { CartProvider } from './context/CartContext';
import Cart from './components/Items/Cart'
import Order from './components/Orders/Order'

export default function App () {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <Switch>
    <Route exact path="/">
    <ItemListContainer />
    </Route>
    <Route path="/category/:categoryName">
      <ItemListContainer />
    </Route>
    <Route path="/item/:id">
      <ItemDetailContainer />
    </Route>
    <Route path="/cart">
      <Cart />
    </Route>
    <Route path="/order">
      <Order />
    </Route>
    <Route path="*">
      <h1>404</h1>
    </Route>
    </Switch>
  </BrowserRouter>
  </CartProvider>
  );
 }


