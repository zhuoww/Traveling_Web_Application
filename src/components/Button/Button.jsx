import React from "react";
import "./Button.css";

function Button({ type = "button", visual = "button", onClick, children }) {
  return (
    <button type={type} className={visual} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
