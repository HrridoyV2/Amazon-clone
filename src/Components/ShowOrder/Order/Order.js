import moment from 'moment'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../../PlaceOrder/CheckoutProduct/CheckoutProduct';

import './Order.css'
function Order({ order }) {
    
    return (
      <div className="order">
        <h2>Order</h2>
        <p>{moment.unix(order.created).format("MMMM Do YYYY, h:mma")}</p>
        <p className="order__id">
          <small>Order ID: {order._id}</small>
        </p>
        {order?.basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h3>Order Total: {value}</h3>
            </>
          )}
          decimalScale={2}
          value={(order.amount)}
          displayType={"text"}
          thousandsSeparator={true}
          prefix={"$"}
        />
      </div>
    );
}

export default Order
