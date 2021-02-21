import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
function Checkout() {
  const data = useSelector((store) => store.basket.basket.slice(1, store.basket.basket.length))

let basket = [...new Set(data)];

// 
// var uniqueCount = Array();
//   uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
// var count = {};
// uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
// console.log("one tim",count);
//
  
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout__ad"
          />
          <div>
            {/* <h3>{user?.email}</h3> */}
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket.map(item => (
              <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    );
}

export default Checkout
