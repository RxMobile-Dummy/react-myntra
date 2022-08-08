import React from "react";

interface Props {
  size: number | string;
  selected: boolean;
  setSelectedSize: (selectedSize: string | number) => void;
}

export default function SizeButton(props: Props) {
  return (
    <button
      className={`size-button m-2 ${
        props.selected ? "size-button-selected" : null
      } text-uppercase`}
      onClick={() => props.setSelectedSize(props.size)}
    >
      {props.size}
    </button>
  );
}
