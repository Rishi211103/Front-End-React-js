import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";



export default function ImageSlider({ images }) 
{
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const pauseSlider = () => {
    sliderRef.current.style.animationPlayState = "paused";
  };

  const resumeSlider = () => {
    sliderRef.current.style.animationPlayState = "running";
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
    >
      <img
        src={images[current]}
        alt="slider"
        className="slider-image"
        ref={sliderRef}
      />

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}
