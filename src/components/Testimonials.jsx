import React, { useState, useEffect } from "react";
import { data } from "../restApi.json";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data[0].testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === data[0].testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? data[0].testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <div className="testimonial-slider" id="testimonials">
      {data[0].testimonials.map((element, index) => (
        <div
          className={`slide ${index === currentIndex ? "active" : ""}`}
          key={index}
        >
          <img src={element.image} alt={element.name} className="testimonial-image" />
          <p className="quote">"{element.quote}"</p>
          <h3 className="name">{element.name}</h3>
          <h4 className="position">{element.position}</h4>
          <p className="description">{element.description}</p>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default TestimonialSlider