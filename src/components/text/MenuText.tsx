import React from "react";

interface Props {
  name: string;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
}

const MenuText = (props: Props) => {
  const {
    name,
    color = "black",
    fontWeight = "300",
    fontSize = "14px",
  } = props;
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
