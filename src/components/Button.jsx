import React from "react";
import "./styles/button.css";

const Button = ({
  text,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-${variant} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
