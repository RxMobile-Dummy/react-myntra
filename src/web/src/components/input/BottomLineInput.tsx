import React from "react";

interface Props {
  label: string;
  id: string;
  isRequired: boolean;
  value: string;
  name: string;
  handleChange: any;
  handleBlur: any;
  error?: string;
  type: string;
}

const BottomLineInput = (props: Props) => {
  const {
    label,
    isRequired,
    id,
    name,
    handleChange,
    handleBlur,
    error = "",
    value,
    type = "text",
  } = props;
  return (
    <div className="form-row">
      <input
        type={type}
        id={id}
        className="form-textbox"
        required={isRequired}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <p className="text-danger mb-0 font-weight-bold">{error}</p>
    </div>
  );
};

export default BottomLineInput;
