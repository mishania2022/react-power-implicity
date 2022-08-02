import React from 'react'

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__slide">
          <h2 className="slider__title">The Power of Simplicity</h2>
          <p className="slider__description">
            Instead of spending time searching for the right app, our AI will
            bring the right app to you.
          </p>
          <button className="slider__button">Learn</button>
          <div className="slider__dots">
            <div className="slider__dot"></div>
            <div className="slider__dot"></div>
            <div className="slider__dot_active"></div>
            <div className="slider__dot"></div>
            <div className="slider__dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
