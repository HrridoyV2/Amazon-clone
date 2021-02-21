import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';
import Checkout from './Components/PlaceOrder/Checkout/Checkout';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Header from './Components/Shared/Header/Header';
import Orders from './Components/ShowOrder/Orders/Orders';
import store from './redux/store';
import { useStateValue } from './StateProvider';
export const UserContext = createContext();

const promise = loadStripe(
  "pk_test_51HfO7aFEbSKa9C2SFejbyAi7gNueWI1A3nqCfVQmt16yGnHDadn1B4hWRpbA5P6Ieb0ZFqorxzP7c2Ez6pGGmGYT00Ux4XVWzG"
);
function App() {
   const [loggedInUser, setLoggedInUser] = useState({});
  const [{ basket , user}, dispatch] = useStateValue();
console.log('====================================');
console.log(store);
console.log('====================================');
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
