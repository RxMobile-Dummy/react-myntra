import React from "react";

const MenuText = ({
  name,
  color = "black",
  fontWeight = "300",
  fontSize = "14px",
}) => {
  return (
    <div>
      <text
        style={{ color: color, fontWeight: fontWeight, fontSize: fontSize }}
      >
        {name}
      </text>
    </div>
  );
};

export default MenuText;
