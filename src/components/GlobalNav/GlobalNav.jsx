import React from "react";
import { useState } from "react";
import "./GlobalNav.css";
import menu from "../Data/menu";
import Form from "../Form/Form";

function GlobalNav({ className, onPageChange }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [showMenu, setShowMenu] = useState(true);
  const showMenuClass = showMenu ? "" : "global-nav__list--hidden";

  const handleMenuItemClick = (page) => {
    if (page === "Sign up") {
      handleButtonClick();
    } else {
      onPageChange(page);
    }
  };

  const list = menu.map((item) => {
    return (
      <li
        className="global-nav__item"
        key={item.name + item.path}
        onClick={() => handleMenuItemClick(item.name)}
      >
        <a className="global-nav__link" href={item.path}>
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <div className={`global-nav ${className}`}>
      <nav>
        <div
          className="global-nav__toggle"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`global-nav__list ${showMenuClass}`}>{list}</ul>
      </nav>

      {isModalOpen && <Form onClose={closeModal} />}
    </div>
  );
}

export default GlobalNav;
