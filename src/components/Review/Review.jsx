import React from "react";
import "./Review.css";
import StarRating from "../StarRating/StarRating";

function Review({ className, name, pic, alt, text, backer, rating }) {
  return (
    <div className={className}>
      <div className={`${className}__pic-container`}>
        <img className={`${className}__pic`} src={pic} alt={alt} />
        <div className={`${className}__rating`}>
          <StarRating rating={rating} />
          <h3 className={`${className}__name`}>{name}</h3>
        </div>
      </div>
      <p className={`${className}__text`}>{text}</p>
      <p className={`${className}__backer`}>Backer: {backer}</p>
    </div>
  );
}

export default Review;
