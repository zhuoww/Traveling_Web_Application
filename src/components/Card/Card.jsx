import React from "react";
import Button from "../Button/Button";
import "./Card.css";

function Card({ className, title, pic, alt, text, showButton, onClick }) {
  return (
    <div className={className}>
      <h3 className={`${className}__title`}>{title}</h3>
      <div className={`${className}__pic-container`}>
        <img className={`${className}__pic`} src={pic} alt={alt} />
      </div>
      <p className={`${className}__text`}>{text}</p>
      <div className={`${className}__button-container`}>
        {showButton && (
          <Button
            type="button"
            visual="link"
            onClick={() => {
              onClick();
            }}
            children="Read More"
          />
        )}
      </div>
    </div>
  );
}

export default Card;
