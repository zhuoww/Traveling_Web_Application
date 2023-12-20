import React from "react";
import Button from "../../components/Button/Button";
import privacyData from "../../components/Data/privacyData";
import "./PrivacyPage.css";

function PrivacyPage({ onClose }) {
  return (
    <div className="privacy">
      <h2 className="privacy__title">{privacyData.title}</h2>
      <p className="privacy__date">Last update: {privacyData.date}</p>
      <div className="privacy__button">
        {onClose && (
          <Button onClick={onClose}>Close {privacyData.title} </Button>
        )}
      </div>
      <p className="privacy__text">{privacyData.text}</p>
      <div>
        <h3 className="privacy__subtitle">Information Collection and Use</h3>
        <p className="privacy__text">{privacyData.information}</p>
      </div>
      <div>
        <h3 className="privacy__subtitle">Security</h3>
        <p className="privacy__text">{privacyData.security}</p>
      </div>
      <div>
        <h3 className="privacy__subtitle">Cookies</h3>
        <p className="privacy__text">{privacyData.cookies}</p>
      </div>
      <div>
        <h3 className="privacy__subtitle">
          Changes to this {privacyData.title}
        </h3>
        <p className="privacy__text">{privacyData.changes}</p>
      </div>
    </div>
  );
}

export default PrivacyPage;
