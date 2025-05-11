import React, { useState } from 'react';
import './MainSlider.css';

const images = [
  '/img/media/MainSliderImg/1.jpg',
'/img/media/MainSliderImg/2.jpg',

];

const MainSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="nav-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default MainSlider;
