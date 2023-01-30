import "./App.css";
import { useState } from "react";
// import projector from "./images/projector.png";

function SlideShow({ slides }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const restart = () => {
    setSlideNumber(0);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(slides.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === slides.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      <main>
        <div>
          <div id="navigation">
            <button
              className="button"
              disabled={slideNumber === 0}
              onClick={restart}
            >
              Restart
            </button>
            <button
              className="button"
              disabled={slideNumber === 0}
              onClick={prevSlide}
            >
              Prev
            </button>
            <button
              className="button"
              disabled={slideNumber >= slides.length - 1}
              onClick={nextSlide}
            >
              Next
            </button>
          </div>

          <div className="slide-show-container">
            <div id="slide" className="card-text">
              <img className="image" src={slides[slideNumber].image} alt="" />
              <p>{slides[slideNumber].caption}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SlideShow;
