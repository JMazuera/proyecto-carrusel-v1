import React, { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

    return (
        <div className="carousel">
            <div className="carousel-container">
                <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="carousel-image" />
                <div className="carousel-content">
                    <h3>{images[currentIndex].title}</h3>
                    <p>{images[currentIndex].description}</p>
                </div>
                <div className="carousel-buttons">
                    <button className="btn btn-gray" onClick={handlePrev}>Anterior</button>
                    <button className="btn btn-green" onClick={handleNext}>Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;