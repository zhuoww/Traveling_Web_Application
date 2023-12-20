import React from "react";
import { useState } from "react";
import "./Plan.css";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

function Plan({ className, title, pic, alt, text, showButton }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={className}>
      <div className={`${className}__pic-container`}>
        <img className={`${className}__pic`} src={pic} alt={alt} />
      </div>
      <div className={`${className}__body`}>
        <h3 className={`${className}__title`}>{title}</h3>
        <p className={`${className}__text`}>{text}</p>
        <div className={`${className}__button-container`}>
          {showButton && (
            <Button
              type="button"
              visual="button"
              onClick={handleButtonClick}
              children="Subscribe"
            />
          )}
        </div>
        {isModalOpen && <Modal onClose={closeModal} title={title} />}
      </div>
    </div>
  );
}
export default Plan;
