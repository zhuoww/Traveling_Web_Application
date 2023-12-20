import React from "react";
import "./Detail.css";
import Button from "../../components/Button/Button";

function Detail({
  title,
  detailedPic1,
  pic1Alt,
  detailedPic2,
  pic2Alt,
  detailedPic3,
  pic3Alt,
  detailedLocation,
  information,
  onClose,
}) {
  return (
    <div id="main-content" className="detail">
      <h2 className="detail__title">{title}</h2>
      <p className="detail__location">{`Location: ${detailedLocation}`}</p>
      {onClose && <Button onClick={onClose}>Close</Button>}
      <p className="detail__text">{information}</p>
      <div className="detail__activities">
        <h3 className="detail__title-2">
          {`Most popular activities in ${title}`}
        </h3>
        <div className="detail__pic-container">
          <img className="detail__pic" src={detailedPic1} alt={pic1Alt} />
          <img className="detail__pic" src={detailedPic2} alt={pic2Alt} />
          <img className="detail__pic" src={detailedPic3} alt={pic3Alt} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
