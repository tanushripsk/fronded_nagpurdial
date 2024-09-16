import React from 'react';
import { Carousel } from 'react-bootstrap';
import './AlertComponent.css';

const AlertComponent = () => {
  const hideCarousel = () => {
    document.getElementById('alertCarousel').style.display = 'none';
  };
  return (
    <div className="fixed-bottom-right">
      <div id="alertCarousel" className="alert alert-warning alert-dismissible fade show" role="alert">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-90"
              src="./Advertisements/Were-looking-for-you-3-212x300.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-90"
              src="./Advertisements/Were-looking-for-you-1-212x300.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-90"
              src="./Advertisements/Were-looking-for-you-2-212x300.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <button type="button" className="btn-close" aria-label="Close" onClick={hideCarousel}></button>
      </div>
    </div>
  );
};

export default AlertComponent;
