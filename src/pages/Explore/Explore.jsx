import React, { useState } from "react";
import "./Explore.css";
import Card from "../../components/Card/Card";
import cardsData from "../../components/Data/cardsData";
import Button from "../../components/Button/Button";
import Detail from "../Detail/Detail";

function Explore({ onCardClick }) {
  const [filter, setFilter] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);
  const [showDetailPage, setShowDetailPage] = useState(false);

  const filterCards = () => {
    if (filter === "us") {
      return cardsData.filter((card) => card.location == "United States");
    } else if (filter === "nonUs") {
      return cardsData.filter((card) => card.location === "Non United States");
    } else {
      return cardsData;
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleCardClick = (index) => {
    const selectedCard = filterCards()[index];
    setSelectedCard(selectedCard);
    setShowDetailPage(true);
  };

  const handleDetailClose = () => {
    setShowDetailPage(false);
    setSelectedCard(null);
  };

  return (
    <div id="main-content" className="explore">
      {!showDetailPage && (
        <>
          <h2 className="explore-title">Where to next?</h2>
          <div className="filter-buttons">
            <Button onClick={() => handleFilterChange("us")}>US</Button>
            <Button onClick={() => handleFilterChange("nonUs")}>Non US</Button>
            <Button onClick={() => handleFilterChange("all")}>ALL</Button>
          </div>
        </>
      )}

      {showDetailPage ? (
        <Detail
          title={selectedCard.title}
          information={selectedCard.information}
          pic={selectedCard.pic}
          detailedPic1={selectedCard.detailedPic1}
          detailedPic2={selectedCard.detailedPic2}
          detailedPic3={selectedCard.detailedPic3}
          detailedLocation={selectedCard.detailedLocation}
          alt={selectedCard.alt}
          text={selectedCard.text}
          onClose={handleDetailClose}
        />
      ) : (
        <div className="cards">
          {filterCards().map((card, index) => (
            <Card
              key={`card${index}`}
              className="card"
              title={card.title}
              pic={card.pic}
              alt={card.alt}
              text={card.text}
              showButton={true}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Explore;
