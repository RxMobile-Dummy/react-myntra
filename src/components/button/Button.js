import React from "react";
import "./style.css";

const Button = ({ title }) => {
  return (
    <button type="button" class="cus-btn">
      {title}
    </button>
  );
};

export default Button;
