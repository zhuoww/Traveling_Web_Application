import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./Modal.css";

function Modal({ onClose, title }) {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isCofirmEmailValid, setIsConfirmEmailValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [modalData, setModalData] = useState({
    email: "",
  });

  useEffect(() => {
    setIsEmailValid(email.includes("@"));
    setIsConfirmEmailValid(confirmEmail === email);
  }, [email, confirmEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.trim() !== "" &&
      confirmEmail.trim() !== "" &&
      isEmailValid &&
      isCofirmEmailValid
    ) {
      setModalData({
        email,
      });
      setShowSuccess(true);
    } else {
      setEmailError(
        email.trim() === ""
          ? "Email is required"
          : isEmailValid
          ? ""
          : "Email is not valid"
      );
      setConfirmEmailError(
        confirmEmail.trim() === ""
          ? "Confirmation email is required"
          : isCofirmEmailValid
          ? ""
          : "Confirmation email does not match"
      );
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
    setEmailError("");
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
    setIsConfirmEmailValid(true);
    setConfirmEmailError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className="subscribe">
      <div className="backdrop" onClick={onClose}></div>
      <dialog open onKeyDown={handleKeyDown} className="subscribe__dialog">
        <form onSubmit={handleSubmit} className="subscribe__form">
          {showSuccess ? (
            <div className="success-container">
              <div className="success-message">
                Thanks for Subscribing {title}!
              </div>
              <div className="modal-data-container">
                <h2>Your Subscribe Data</h2>
                <p className="modal-data__text">Email: {modalData.email}</p>
              </div>
              <Button type="button" onClick={onClose} children="Close" />
            </div>
          ) : (
            <>
              <h2 className="subscribe__form-title">{`Subscribe to ${title}!`}</h2>

              <label htmlFor="email" className="subscribe__form-label">
                Email
                <span className="subscribe__form-required">* required</span>
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="subscribe__form-input"
              />
              {emailError && (
                <p className="subscribe__form-error">{emailError}</p>
              )}

              <label htmlFor="confirmEmail" className="subscribe__form-label">
                Confirm Email
                <span className="subscribe__form-required">* required</span>
              </label>
              <input
                type="text"
                id="confirmEmail"
                value={confirmEmail}
                onChange={handleConfirmEmailChange}
                className="subscribe__form-input"
              />
              {confirmEmailError && (
                <p className="subscribe__form-error">{confirmEmailError}</p>
              )}

              <div className="subscribe__form-buttons">
                <Button type="submit" children="Submit" />
                <Button type="button" onClick={onClose} children="Close" />
              </div>
            </>
          )}
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
