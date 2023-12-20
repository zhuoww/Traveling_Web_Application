import React from "react";
import "./DisplayFormData.css";

function DisplayFormData({ className, formData }) {
  return (
    <div className={className}>
      <h2 className={`${className}__title`}>Your Form Data</h2>
      <div className={`${className}__data-container`}>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Annoy Me: {formData.annoyMe ? "Yes" : "No"}</p>
        <p>Tier: {formData.tier}</p>
        {formData.tier === "other" && <p>Other Value: {formData.otherValue}</p>}
      </div>
    </div>
  );
}

export default DisplayFormData;
