import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const loadData = () => {
    fetch("https://limitless-hamlet-24521.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        return setProducts(data.sort(() => Math.random() - 0.5).slice(0, 15));
      });
  };
  loadData();

  return (
    <div className="row">
      {products?.map((pd) => (
        <div className="col-md-6 col-lg-4">
          <Product
            id={pd.key}
            title={pd.name}
            price={pd.price}
            rating={pd.star}
            image={pd.img}
          />
        </div>
      ))}
      <button onClick={() => loadData()} className="btn btn-secondary ml-auto">
        See more
      </button>
    </div>
  );
}

export default Products;
