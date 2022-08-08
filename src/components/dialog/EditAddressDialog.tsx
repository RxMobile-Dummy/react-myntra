import React from "react";

const EditAddressDialog = () => {
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
              Edit Address
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              id="input-form"
              onSubmit={() => {}}
              className="form-container"
            >
              <div className="form-row">
                <input
                  type="text"
                  id="form-email"
                  className="form-textbox"
                  required
                />
                <label htmlFor="form-email" className="form-label">
                  Name*
                </label>
              </div>
              <div className="form-row">
                <input
                  type="text"
                  id="form-mobile"
                  className="form-textbox"
                  required
                />
                <label htmlFor="form-mobile" className="form-label">
                  Mobile*
                </label>
              </div>
              <div className="ad-inp">
                <div className="form-row">
                  <input
                    type="text"
                    id="form-pincode"
                    className="form-textbox"
                    required
                  />
                  <label htmlFor="form-pincode" className="form-label">
                    Pincode*
                  </label>
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    id="form-state"
                    className="form-textbox"
                    required
                  />
                  <label htmlFor="form-state" className="form-label">
                    State*
                  </label>
                </div>
              </div>
              <div className="form-row">
                <input
                  type="text"
                  id="form-address"
                  className="form-textbox"
                  required
                />
                <label htmlFor="form-address" className="form-label">
                  Address (House No, Building, Street, Area) *
                </label>
              </div>
              <div className="form-row">
                <input
                  type="text"
                  id="form-town"
                  className="form-textbox"
                  required
                />
                <label htmlFor="form-town" className="form-label">
                  Locality/ Town*
                </label>
              </div>
              <div className="form-row">
                <input
                  type="text"
                  id="form-city"
                  className="form-textbox"
                  required
                />
                <label htmlFor="form-city" className="form-label">
                  City/ District *
                </label>
              </div>
              {/* <span className="">Type of address *</span> */}
              <p className="fw-lighter mt-3">Type of address *</p>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Home
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Office
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
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
              data-bs-target="#editAddressDialog"
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
