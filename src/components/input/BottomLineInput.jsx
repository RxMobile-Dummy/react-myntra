import React from "react";

const BottomLineInput = ({ label, isRequired, id }) => {
  return (
    <div class="form-row">
      <input type="card" id={id} class="form-textbox" required={isRequired} />
      <label for={id} class="form-label">
        {label}
      </label>
    </div>
  );
};

export default BottomLineInput;
