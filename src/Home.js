import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import Discover from './Discover';
import Footer from './Footer';
import './Home.css'
import Product from './Components/Home/Product/Product'
import "./Components/Shared/HeaderCarousel/node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
function Home() {
    
    return (
      <div className="home">
        <div className="home__container">
          <a href="#top">
            <Carousel
              autoPlay={true}
              swipeable={true}
              interval={3000}
              transitionTime={300}
              infiniteLoop={true}
              showThumbs={true}
              showStatus={true}
            >
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
                  className="home__image"
                  alt="1"
                />
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
                  className="home__image"
                  alt="2"
                />
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                  className="home__image"
                  alt="3"
                />
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                  className="home__image"
                  alt="4"
                />
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
                  className="home__image"
                  alt="5"
                />
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
                  className="home__image"
                  alt="6"
                />
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
                  className="home__image"
                  alt="7"
                />
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                  alt="8"
                  className="home__image"
                />
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"
                  alt="9"
                  className="home__image"
                />
              </div>
            </Carousel>
          </a>


          <br />
          <br />
          <Discover />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    );
}

export default Home
    