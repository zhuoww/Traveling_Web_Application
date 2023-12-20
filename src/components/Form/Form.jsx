import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./Form.css";
import DisplayFormData from "../../pages/DisplayData/DisplayFormData";

function Form({ onClose }) {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isCofirmEmailValid, setIsConfirmEmailValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [annoyMe, setAnnoyMe] = useState(true);
  const [tier, setTier] = useState("");
  const [tierError, setTierError] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [otherValue, setOtherValue] = useState("");
  const [otherError, setOtherError] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    annoyMe: true,
    tier: "",
    otherValue: "",
  });

  useEffect(() => {
    setIsEmailValid(email.includes("@"));
    setIsConfirmEmailValid(confirmEmail === email);
  }, [name, email, confirmEmail, annoyMe, tier, otherValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      confirmEmail.trim() !== "" &&
      isEmailValid &&
      isCofirmEmailValid &&
      ((tier !== "" && selectedOption !== "other") ||
        (selectedOption === "other" && otherValue.trim() !== ""))
    ) {
      setFormData({
        name,
        email,
        confirmEmail,
        annoyMe,
        tier,
        otherValue,
      });
      setShowSuccess(true);
    } else {
      setNameError(name.trim() === "" ? "Name is required" : "");
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
      setTierError(tier.trim() === "" ? "Pleaser choose a tier" : "");
      setOtherError(
        selectedOption === "other" && otherValue.trim() === ""
          ? "This field is required"
          : ""
      );
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
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

  const handleTierChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue !== "other") {
      setOtherValue("");
    }
    setTier(selectedValue);
    setTierError("");
    setOtherError("");
  };

  const handleOtherInputChange = (e) => {
    setOtherValue(e.target.value);
    setOtherError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className="signUp">
      <div className="backdrop" onClick={onClose}></div>
      <dialog open onKeyDown={handleKeyDown} className="signUp__dialog">
        <form onSubmit={handleSubmit} className="signUp__form">
          {showSuccess ? (
            <div className="success-container">
              <div className="success-messages">
                Form submitted successfully!
              </div>
              <DisplayFormData
                className="display-form-data"
                formData={formData}
              />
              <Button type="button" onClick={onClose} children="Close" />
            </div>
          ) : (
            <>
              <h2 className="signUp__form-title">Sign up</h2>
              <label htmlFor="name" className="signUp__form-label">
                Name<span className="signUp__form-required">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="signUp__form-input"
              />
              {nameError && <p className="signUp__form-error">{nameError}</p>}

              <label htmlFor="email" className="signUp__form-label">
                Email<span className="signUp__form-required">*</span>
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="signUp__form-input"
              />
              {emailError && <p className="signUp__form-error">{emailError}</p>}

              <label htmlFor="confirmEmail" className="signUp__form-label">
                Confirm Email<span className="signUp__form-required">*</span>
              </label>
              <input
                type="text"
                id="confirmEmail"
                value={confirmEmail}
                onChange={handleConfirmEmailChange}
                className="signUp__form-input"
              />
              {confirmEmailError && (
                <p className="signUp__form-error">{confirmEmailError}</p>
              )}

              <label htmlFor="annoy_me" className="signUp__form-annoy">
                <input
                  type="checkbox"
                  id="annoy_me"
                  checked={annoyMe}
                  onChange={() => setAnnoyMe(!annoyMe)}
                  className="signUp__form-input"
                />
                <span>Do you want us to send you annoying emails?</span>
              </label>

              <label htmlFor="tier" className="signUp__form-label">
                Choose a Tier<span className="signUp__form-required">*</span>
              </label>
              <select
                name="tier"
                id="tier"
                value={tier}
                onChange={handleTierChange}
                className="signUp__form-select"
              >
                <option value="" disabled selected>
                  Please Select
                </option>
                <option value="1">Silver Tier</option>
                <option value="2">Gold Tier</option>
                <option value="3">Platinum Tier</option>
                <option value="other">Other</option>
              </select>
              {selectedOption === "other" && (
                <>
                  <label htmlFor="other" className="signUp__form-label">
                    Please Specify "other"
                    <span className="signUp__form-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="other"
                    value={otherValue}
                    onChange={handleOtherInputChange}
                    className="signUp__form-input"
                  />
                  {otherError && (
                    <p className="signUp__form-error">{otherError}</p>
                  )}
                </>
              )}
              {tierError && <p className="signUp__form-error">{tierError}</p>}

              <div className="signUp__form-buttons">
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

export default Form;
