import React from "react";
import "./ReviewCardItem.css";
function ReviewCardItem({ review }) {
  return (
    <div className="ReviewCardItem">
      <div className="imageReviewCard">
        <img src={review.picture} alt="" />
      </div>

      <p className="authorReviewCard">User Name:   {review.author}</p>
      <div className="bodyReviewCard">"{review.body}"</div>
      <p className="rateReviewCard">{review.rating}</p>
    </div>
  );
}

export default ReviewCardItem;




