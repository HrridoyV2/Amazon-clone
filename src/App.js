import React, { useEffect } from 'react';
import "./App.css";
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The User is >>> ", authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
         dispatch({
           type: 'SET_USER',
           user: null
         })
      }
    })
  },[])
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
