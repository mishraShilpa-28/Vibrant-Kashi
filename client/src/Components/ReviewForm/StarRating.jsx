import React from "react";
import "./StarRating.css";

const StarRating = ({ rating, onRate }) => {
  const handleRate = (index) => {
    onRate(index + 1);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => (
        <span
          key={index}
          className={index < rating ? "star-filled" : "star-empty"}
          onClick={() => handleRate(index)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;



