import React from "react";
import "./StarRating.css";

function StarRating({ rating }) {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={`filledStar${index}`} className="star filled">
      ★
    </span>
  ));

  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <span key={`emptyStar${index}`} className="star">
      ☆
    </span>
  ));

  return (
    <div className="star-rating">
      {stars}
      {emptyStars}
      {` ${rating}/5`}
    </div>
  );
}

export default StarRating;
