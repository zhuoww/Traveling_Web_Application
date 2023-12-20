import React from "react";
import "./Footer.css";
import Button from "../Button/Button";

function Footer({ onClick }) {
  return (
    <footer className="footer">
      <Button
        type="button"
        visual="link"
        children="privacy"
        onClick={onClick}
      />
    </footer>
  );
}

export default Footer;
