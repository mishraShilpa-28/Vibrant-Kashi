import React from 'react'
import "./ReviewPage.css"
import ReviewCard from "../../Components/ReviewCard/ReviewCard"
import ReviewForm from "../../Components/ReviewForm/ReviewForm"
import { existingReview as existingReviewsData } from "../../Data/exisitingReviewDetails.json";
import { useState } from 'react';
function ReviewPage({ headerTenth }) {
  

    const [existingReviews, setExistingReviews] = useState(existingReviewsData);

    const handleReviewSubmit = (newReview) => {
      setExistingReviews([...existingReviews, newReview]);
    };


  return (
    <div>
      <div className="Review">
        <div className="ReviewImage">
          <img src={headerTenth.image} alt="Review Image" />
        </div>
        <div className="ReviewTitle">
          <h1 className="reviewsHeading">{headerTenth.title}</h1>
        </div>
      </div>

      <div>
        <h2 className="reviewTitle">Your Voice Matters</h2>
        <div className="descriptionOfReview">
          Your review is more than just a few words on a screen; it's a valuable
          contribution to the vibrant community of travelers exploring Varanasi.
          Whether you're sharing insights, recommendations, or personal
          experiences, your voice holds the power to shape the travel
          experiences of others. In a world filled with endless options, trust
          is paramount. Your honest reviews build trust within the travel
          community, helping travelers navigate through the myriad of choices
          Varanasi has to offer. By sharing your experiences, you create
          connections with fellow travelers, fostering a sense of camaraderie
          and support.
        </div>
        <div>
          <h2 className="reviewTitle">Existing Reviews:</h2>
          <ReviewCard eReview={existingReviews} />
        </div>

        <div>
          <h2 className="reviewTitle">Join the Conversation</h2>
          <div className="descriptionOfReview">
             Your review is more than just feedback; it's an invitation to join
            the conversation. Engage with fellow travelers, share tips and
            recommendations, and inspire others to embark on their own
            adventures in Varanasi. Together, we can create a community united
            by a shared passion for travel and discovery.
          </div>

          <ReviewForm onSubmit={handleReviewSubmit} />
        </div>
      </div>
    </div>
  );
}

export default ReviewPage