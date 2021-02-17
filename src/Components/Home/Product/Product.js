import React from 'react'
import { Link } from 'react-router-dom';
import './Product.css';
import {useStateValue} from "../../../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue()
  const addToBasket = () => {
     dispatch({
       type: 'ADD_TO_BASKET',
       item: {
         id: id,
         title: title,
         image: image,
         price:price,
         rating: rating,
       },
     })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">
          <Link to={"/product/"+id}>{title}</Link>
        </p>
        <div className="d-flex">
          <span className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </span>
          <span className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <p>⭐</p>;
              })}
          </span>
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product
