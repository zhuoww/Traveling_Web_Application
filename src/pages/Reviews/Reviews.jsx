import React, { useState } from "react";
import "./Reviews.css";
import Review from "../../components/Review/Review";
import reviewsData from "../../components/Data/reviewsData";

function Reviews() {
  const SortOptions = ["Default", "Ascending", "Descending"];
  const [sortOrder, setSortOrder] = useState("default");

  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortOptionClick = (option) => {
    setSortOrder(option);
    setShowDropdown(false);
  };

  const sortedReviewData = [...reviewsData].sort((a, b) => {
    if (sortOrder === "Ascending") {
      return a.rating - b.rating;
    } else if (sortOrder === "Descending") {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  return (
    <div id="main-content">
      <h2 className="review-title">
        Hear what travelers are saying about our app
      </h2>
      <div
        className="dropdown__toggle"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="dropdown__toggle-bar-container">
          <div className="dropdown__toggle-bar"></div>
          <div className="dropdown__toggle-bar"></div>
          <div className="dropdown__toggle-bar"></div>
        </div>
        Sort by Rating
      </div>
      <ul
        className={`dropdown__list ${
          showDropdown ? "" : "dropdown__list--hidden"
        }`}
      >
        {SortOptions.map((option, index) => (
          <li
            key={index}
            className="dropdown__item"
            onClick={() => handleSortOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>

      <div className="reviews">
        {sortedReviewData.map((review, index) => (
          <Review
            key={`review${index}`}
            className="review"
            name={review.name}
            pic={review.pic}
            alt={review.alt}
            text={review.text}
            backer={review.backer}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
