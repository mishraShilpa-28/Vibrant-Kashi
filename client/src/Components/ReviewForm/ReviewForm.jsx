import React, { useState } from "react";
import StarRating from "./StarRating";
import "./ReviewForm.css";

const ReviewForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = { title, author, rating, body, image };
    onSubmit(review);
    // Clear form fields after submission
    setTitle("");
    setAuthor("");
    setRating(0);
    setBody("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <StarRating rating={rating} onRate={setRating} />
      <textarea
        placeholder="Your review"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;




