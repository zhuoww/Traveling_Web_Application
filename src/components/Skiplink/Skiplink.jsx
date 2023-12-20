import React from "react";
import "./Skiplink.css";

const Skiplink = ({ targetId, children }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.tabIndex = -1;
      targetElement.focus();
    }
  };

  return (
    <a href={`#${targetId}`} className="skiplink" onClick={handleClick}>
      {children}
    </a>
  );
};

export default Skiplink;
