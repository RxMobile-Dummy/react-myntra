import React from "react";
import "./DialogStyles.css";

const ChangePasswordDialog = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Change Password
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="change-form">
              <div className="material-textfield mt-4">
                <input placeholder=" " type="password" required />
                <label>Old Password*</label>
              </div>
              <div className="material-textfield mt-4">
                <input placeholder=" " type="password" required />
                <label>New Password*</label>
              </div>
              <div className="material-textfield mt-4">
                <input placeholder=" " type="password" required />
                <label>Confirm Password*</label>
              </div>
              <button
                className="model-change-btn mt-4"
                form="change-form"
                type="submit"
                data-bs-target="#staticBackdrop"
              >
                <p className="fw-normal py-2 mb-1">CHANGE</p>
              </button>
              <div
                className="model-cancel-btn mt-4"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <p className="py-2 mb-1">CANCEL</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordDialog;
