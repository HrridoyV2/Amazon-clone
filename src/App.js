import React, { createContext, useEffect, useState } from 'react';
import "./App.css";
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { auth } from './Components/Login/firebase';
import { useStateValue } from './StateProvider';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Checkout from './Components/PlaceOrder/Checkout/Checkout';
import Login from './Components/Login/Login';
import Orders from './Components/ShowOrder/Orders/Orders';

export const UserContext = createContext();

const promise = loadStripe(
  "pk_test_51HfO7aFEbSKa9C2SFejbyAi7gNueWI1A3nqCfVQmt16yGnHDadn1B4hWRpbA5P6Ieb0ZFqorxzP7c2Ez6pGGmGYT00Ux4XVWzG"
);
function App() {
   const [loggedInUser, setLoggedInUser] = useState({});
  const [{ basket , user}, dispatch] = useStateValue();

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
