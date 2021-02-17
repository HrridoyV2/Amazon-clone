import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../StateProvider";
import Order from "../Order/Order";
import "./Orders.css";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const email = user?.email;
  console.log(email);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(
      "https://limitless-hamlet-24521.herokuapp.com/orderData?email=" + email,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  console.log(order);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {order?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
