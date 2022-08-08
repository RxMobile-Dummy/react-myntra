import React from "react";

interface Props {
  label: string;
  id: string;
  isRequired: boolean;
}

const BottomLineInput = (props: Props) => {
  const { label, isRequired, id } = props;
  return (
    <div className="form-row">
      <input
        type="card"
        id={id}
        className="form-textbox"
        required={isRequired}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
    </div>
  );
};

export default BottomLineInput;
