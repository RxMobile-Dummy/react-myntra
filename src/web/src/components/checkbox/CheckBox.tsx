import React from "react";
import "./CheckBox.css";

interface Props {
  name: string;
  quantity: number;
  checked?: boolean;
  onChange?: () => void;
}

const CheckBox = (props: Props) => {
  const { name, checked, onChange, quantity = 10 } = props;
  return (
    <div className="form-check checkbox-red">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        // checked={checked}
        onClick={(e) => {
          console.log("checkbox e :: ", (e.target as HTMLInputElement).value);
        }}
      />
      <label
        className="form-check-label custom-label"
        htmlFor="flexCheckDefault"
        style={{ fontWeight: 200 }}
      >
        {`${name} (${quantity})`}
      </label>
    </div>
  );
};

export default CheckBox;
