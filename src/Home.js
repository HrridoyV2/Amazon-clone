import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/LittleFiresEverywhere/LITT_S1_Xsite_FT_HeroTALL_1500x600_PV_en-GB._CB431647716_.jpg"
            className="home__image"
            alt=""
          />
          <div className="home__row">
            <Product
              id="1001"
              title="The lean startup"
              price={29.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
            <Product
              id="1002"
              title="The lean startup"
              price={39.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="1003"
              title="The lean startup"
              price={49.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
            <Product
              id="1004"
              title="The lean startup"
              price={69.99}
              rating={2}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
            <Product
              id="1005"
              title="The lean startup"
              price={89.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="1006"
              title="The lean startup"
              price={19.99}
              rating={2}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
          </div>
        </div>
      </div>
    );
}

export default Home
