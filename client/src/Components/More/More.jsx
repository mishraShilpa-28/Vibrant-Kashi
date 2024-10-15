import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import "./More.css";

const More = ({ destinations }) => {
  const [startSlide, setStartSlide] = useState(0);
  const cardsPerPage = 4; // Number of cards to display per page

  const nextSlide = () => {
    if (startSlide + cardsPerPage < destinations.length) {
      setStartSlide(startSlide + 1);
    }
  };

  const prevSlide = () => {
    if (startSlide > 0) {
      setStartSlide(startSlide - 1);
    }
  };

  return (
    <div>
    <div className="headingMore">Nearby Destinations </div>
    <div className="slider-container">
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className={`arrow arrow-left ${startSlide === 0 ? "hidden" : ""}`}
      />
      <div className="cards-container">
        {destinations
          .slice(startSlide, startSlide + cardsPerPage)
          .map((destination, index) => (
            <div className="card" key={index}>
              <img
                src={destination.image}
                alt={destination.name}
                className="card-image"
              />
              <div className="card-content">
                <h2 className="destination-name">{destination.name}</h2>
                <p className="destination-description">
                  {destination.description}
                </p>
                <div className="card-info">
                  <span className="cost">Cost: {destination.cost}</span>
                  <span className="distance">
                    Distance: {destination.distance} 
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={`arrow arrow-right ${
          startSlide + cardsPerPage >= destinations.length ? "hidden" : ""
        }`}
      />
      </div>
      </div>
  );
};

export default More;
