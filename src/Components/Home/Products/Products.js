import React, { useState } from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
function Products() {
  const [products, setProducts] = useState();
  const [allProducts, setAllProducts] = useState([]);
  const loadData = () => {
    fetch("https://limitless-hamlet-24521.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        return setProducts(data.slice(0, 15));
      });
  };
  loadData();
const Products = useSelector(state => console.log("products from redux",state))


  return (
    <div className="row">
      {!products &&
        <>
        {/* <Loader
      type="Bars"
      color="#00BFFF"
      height={100}
      width={1350}
    /> */}<h4 className="alert-info ml-auto mr-auto">Loading products, Please wait a while</h4>
    </>}
      {products?.map((pd) => (
        <div className="col-md-6 col-lg-4 d-block">
          <Product
            id={pd.key}
            title={pd.name}
            price={pd.price}
            rating={pd.star}
            image={pd.img}
          />
        </div>
      ))}
      
    </div>
  );
}

export default Products;
