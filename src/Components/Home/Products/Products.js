import React, { useEffect } from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { connect, useSelector } from 'react-redux';
import { fetchProducts } from "../../../redux";
import Product from '../Product/Product';

function Products({fetchProducts, userData}) {
  
  useEffect(() => {
    fetchProducts()
}, [fetchProducts])
const products = useSelector(state => state.products.products);



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

const mapStateToProps = state => {
  return {
      userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);



