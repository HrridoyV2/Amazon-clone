import React from 'react';
import HeaderCarousel from '../../Shared/HeaderCarousel/HeaderCarousel';
import Products from '../Products/Products';
import Discover from '../../Shared/Discover/Discover';
import Footer from '../../Shared/Footer/Footer';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <HeaderCarousel />
                <Products />
                <Discover />
                <Footer />
            </div>
        </div>
    )
}

export default Home
