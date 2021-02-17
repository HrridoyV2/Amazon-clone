import React from 'react'
import { Link } from 'react-router-dom'

function Discover() {
    return (
      <div>
        <h1>
          Discover Ema-John{" "}
          <Link>
            <small>Click to learn more</small>
          </Link>
        </h1>
        <div className="row">
          <div className="col-lg-2 col-md-3 col-md-3">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-3 col-md-3">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-3 col-md-3">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-3 col-md-3">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-3 col-md-3">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-3 col-md-3">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default Discover
