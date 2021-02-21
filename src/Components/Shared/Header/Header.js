import { Search, ShoppingBasket } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../../../logo.png';
import { auth } from "../../Login/firebase";
import "./Header.css";

function Header() {
  // const [{basket, user},  dispatch] = useStateValue();
  const [loggedInUser, setLoggedInUser] = useState("");

  const products = useSelector((store) => store.basket.basket.slice(1, store.basket.basket.length))
  
     
  const handleAuthentication = () => {
    if(loggedInUser){
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          src={logo}
          className="header__logo" alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" name="" id="" className="header__searchInput" />
        <Search className="header__searchIcon"></Search>
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {loggedInUser.user?.email || "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {loggedInUser.user? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {products.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
