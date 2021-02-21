import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import {useStateValue} from "../../../StateProvider";
import { addToBasket } from '../../../redux';
import './Product.css';
function Product({ id, title, image, price, rating}) {
  
const dispatch = useDispatch();
  const [items, setItems] = useState(null);
  useEffect(() => {
    
    setItems({id, title, image, price, rating})
    
  }, [id, image, price, rating, title])
  

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
      <button onClick={() => dispatch(addToBasket(items))}>Add to Basket</button>
    </div>
  );
}


export default Product;