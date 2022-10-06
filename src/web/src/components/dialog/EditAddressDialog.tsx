import React from "react";

interface Props {
  dialogTitle: string;
  address: any;
  handleChange: any;
  handleCancel: any;
  handleBlur: any;
  submitClickHandler: any;
  errors: any;
}

const EditAddressDialog = (props: Props) => {
  const {
    dialogTitle = "ADD NEW ADDRESS",
    address,
    handleChange,
    handleBlur,
    submitClickHandler,
    errors,
    handleCancel,
  } = props;
  const {
    name,
    mobileNo,
    pinCode,
    country,
    state,
    city,
    billingAddress,
    shippingAddress,
    locality,
    type,
    isDefault,
  } = address;

  return (
    <div
      className="modal fade"
      id="editAddressDialog"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {dialogTitle}
            </h5>
            <button
              type="button"
              className="btn-close"
              id="close-button"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCancel}
            ></button>
          </div>
          <div className="modal-body">
            <form
              id="input-form"
              onSubmit={submitClickHandler}
              className="form-container"
            >
              <div className="form-row">
                <input
                  type="text"
                  id="form-name"
                  className="form-textbox"
                  required
                  name="name"
                  value={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="form-name" className="form-label">
                  Name*
                </label>
                <p className="text-danger mb-0 font-weight-bold">
                  {errors.name}
                </p>
              </div>
              <div className="form-row">
                <input
                  type="number"
                  id="form-mobile"
                  name="mobileNo"
                  className="form-textbox"
                  required
                  value={mobileNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="form-mobile" className="form-label">
                  Mobile*
                </label>
                <p className="text-danger mb-0 font-weight-bold">
                  {errors.mobileNo}
                </p>
              </div>
              <div className="ad-inp">
                <div className="form-row">
                  <input
                    type="text"
                    id="form-pincode"
                    name="pinCode"
                    className="form-textbox"
                    required
                    value={pinCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="form-pincode" className="form-label">
                    Pincode*
                  </label>
                  <p className="text-danger mb-0 font-weight-bold">
                    {errors.pinCode}
                  </p>
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    id="form-state"
                    className="form-textbox"
                    required
                    name="state"
                    value={state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="form-state" className="form-label">
                    State*
                  </label>
                  <p className="text-danger mb-0 font-weight-bold">
                    {errors.state}
                  </p>
                </div>
              </div>
              <div className="form-row">
                <input
                  type="text"
                  id="form-address"
                  className="form-textbox"
                  required
                  name="billingAddress"
                  value={billingAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="form-address" className="form-label">
                  Address (House No, Building, Street, Area) *
                </label>
                <p className="text-danger mb-0 font-weight-bold">
                  {errors.billingAddress}
                </p>
              </div>
              <div className="form-row">
                <input
                  type="text"
                  id="form-town"
                  className="form-textbox"
                  required
                  name="locality"
                  value={locality}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="form-town" className="form-label">
                  Locality/ Town*
                </label>
                <p className="text-danger mb-0 font-weight-bold">
                  {errors.locality}
                </p>
              </div>
              <div className="form-row">
                <input
                  type="text"
                  id="form-city"
                  className="form-textbox"
                  required
                  name="city"
                  value={city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="form-city" className="form-label">
                  City/ District *
                </label>
                <p className="text-danger mb-0 font-weight-bold">
                  {errors.city}
                </p>
              </div>
              {/* <span className="">Type of address *</span> */}
              <p className="fw-lighter mt-3">Type of address *</p>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="addType1"
                  id="inlineRadio1"
                  value="option1"
                  checked={type === "Home"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Home
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="addType2"
                  id="inlineRadio2"
                  value="option2"
                  checked={type === "Office"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Office
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isDefault}
                  name="isDefault"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Make this as my default address
                </label>
              </div>
            </form>
          </div>
          <div className="border-top ad-footer mt-5">
            <button
              className=""
              data-bs-toggle="modal"
              id="cancel-button"
              data-bs-target="#editAddressDialog"
              onClick={handleCancel}
            >
              CANCEL
            </button>
            <button form="input-form">SAVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAddressDialog;
