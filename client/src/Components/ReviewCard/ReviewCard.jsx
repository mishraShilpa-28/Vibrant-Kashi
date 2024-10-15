import React from "react";
import ReviewCardItem from "../ReviewCardItem/ReviewCardItem";
import "./ReviewCard.css"
function ReviewCard({ eReview }) {
  return (
      <div className="eReviewCard">
          
      {eReview.map((item ,idx) => {
          return <ReviewCardItem key={idx} review={item} />
      })}
          
    </div>
  );
}




export default ReviewCard;
