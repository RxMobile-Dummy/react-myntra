import React from "react";
import "./style.css";

interface Props {
  title: string | number;
}

const Button = (props: Props) => {
  return (
    <button type="submit" className="cus-btn">
      {props.title}
    </button>
  );
};

export default Button;
