import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import HeaderCarousel from "../Shared/HeaderCarousel/HeaderCarousel";
import { useStateValue } from "../../StateProvider";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://limitless-hamlet-24521.herokuapp.com/product/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div>
      <div>
        <HeaderCarousel />
      </div>
      <div className="row h4">
        <div className="text-center ml-auto mr-auto">
          <h1>Product Details</h1>
          <div>
            <img src={product.img} alt="" />
          </div>
          <br />
          <br />
          <div className="d-flex">
            <span className="product__price mr-auto">
              <p>
                <small>Price: $</small>
                <strong>{product.price}</strong>
              </p>
              <p>
                <small>Shipping: $</small>
                <strong>{product.shipping}</strong>
              </p>
            </span>
            <span className="product__price ml-auto">
              <p className="d-flex">
                {Array(product.star)
                  .fill()
                  .map((_, i) => {
                    return <span>⭐</span>;
                  })}
              </p>
              <p>
                <small>Stock: </small>
                <strong>{product.stock}</strong>
              </p>
            </span>
          </div>
          <p>
            <small>Seller:</small>
            <strong>{product.seller}</strong>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
