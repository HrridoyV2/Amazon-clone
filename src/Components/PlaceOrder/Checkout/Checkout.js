import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
function Checkout() {
  const data = useSelector((store) => store.basket.basket)

let basket = [...new Set(data)];
  
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
