import { Search, ShoppingBasket } from "@material-ui/icons";
import { auth } from "../../Login/firebase";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "../../../StateProvider";
import logo from '../../../logo.png';
import { UserContext } from "../../../App";
import { useContext } from "react";
function Header() {
  const [{basket, user},  dispatch] = useStateValue();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  console.log(loggedInUser);
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
        <Link to={!loggedInUser && "/login"}>
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
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
