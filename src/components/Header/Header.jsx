import React from "react";
import "./Header.css";
import GlobalNav from "../GlobalNav/GlobalNav";
import Skiplink from "../Skiplink/Skiplink";

function Header({ onPageChange }) {
  return (
    <header className="header">
      <Skiplink targetId="main-content" children="Skip to Main Content" />
      <a href="/index.html">
        <img
          src="/noun-earth.png"
          className="header__logo"
          alt="A group of kittens squatted side by side."
        />
      </a>

      <h1 className="header__title">From Here to Everywhere</h1>
      <GlobalNav className="header__nav" onPageChange={onPageChange} />
    </header>
  );
}

export default Header;
