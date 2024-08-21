import image2 from "../assets/image/slide1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ imageUrl, title, getSlide }) => {
  let slideCount = 1;
  function HandlerSlideLeft() {
    slideCount = slideCount + 1;
    if (slideCount > 2) {
      slideCount = 1;
    }
    getSlide(slideCount);
  }
  function HandlerSlideRight() {
    slideCount--;
    if (slideCount < 1) {
      slideCount = 2;
    }
    getSlide(slideCount);
  }
  return (
    <div
      className="slider-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="button-slide">
        <button onClick={HandlerSlideRight}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={HandlerSlideLeft}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
