import React from "react";
import "./CheckBox.css";

const CheckBox = ({ name, checked, onChange, quantity = 10 }) => {
  return (
    <div class="form-check checkbox-red">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        // checked={checked}
        onClick={(e) => {
          console.log("checkbox e :: ", e.target.value);
        }}
      />
      <label class="form-check-label" for="flexCheckDefault">
        {`${name} (${quantity})`}
      </label>
    </div>
  );
};

export default CheckBox;
