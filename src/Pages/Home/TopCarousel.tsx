import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/img/slideshow/slide-01.png';
import slide2 from '../../assets/img/slideshow/slide-02.png';
import slide3 from '../../assets/img/slideshow/slide-03.png';
import slide4 from '../../assets/img/slideshow/slide-04.png';

function TopCarousel() {
    return (
        <section className="h-slide">
            <div className="container">
                <Carousel indicators={false}>
                    <Carousel.Item>
                    <img className="d-block w-100" src={slide1} alt="Beeswax Spa" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={slide2} alt="Beeswax Spa" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={slide3} alt="Beeswax Spa" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={slide4} alt="Beeswax Spa" />
                    </Carousel.Item>
                </Carousel>
            </div>
      </section>
    );
}

export default TopCarousel;