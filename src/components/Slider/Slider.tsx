import "./slider.scss";
import buttonSlider from "../../assets/slider-button.png";

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
          <button className="slider__button" type="button">
            <img src={buttonSlider} alt="button" />
          </button>
          <ul className="slider__dots">
            <li className="slider__dot"></li>
            <li className="slider__dot"></li>
            <li className="slider__dot slider__dot--active"></li>
            <li className="slider__dot"></li>
            <li className="slider__dot"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
