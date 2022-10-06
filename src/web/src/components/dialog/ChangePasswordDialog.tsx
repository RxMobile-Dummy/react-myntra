import React from "react";
import "./DialogStyles.css";

interface Props {
  onClickChange: any;
  onClickCancel: any;
  handleChange: any;
  apiError: any;
  errors: any;
  handleBlur: any;
  hideDialog: boolean;
  data: any;
}

const ChangePasswordDialog = (props: Props) => {
  const {
    onClickChange,
    onClickCancel,
    handleChange,
    handleBlur,
    apiError,
    errors,
    hideDialog,
    data,
  } = props;
  const { oldPassword, newPassword, confirmPassword } = data;
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
          <div className="modal-body" onSubmit={onClickChange}>
            <form id="change-form">
              <div className="material-textfield mt-4">
                <input
                  placeholder=" "
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  value={oldPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                />
                <label>Old Password*</label>
              </div>
              <p className="text-danger mb-0 font-weight-bold">
                {errors.oldPassword}
              </p>
              <div className="material-textfield mt-4">
                <input
                  placeholder=" "
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={newPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                />
                <label>New Password*</label>
              </div>
              <p className="text-danger mb-0 font-weight-bold">
                {errors.newPassword}
              </p>
              <div className="material-textfield mt-4">
                <input
                  placeholder=" "
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onBlur={handleBlur}
                  value={confirmPassword}
                  onChange={handleChange}
                  required
                />
                <label>Confirm Password*</label>
              </div>
              <p className="text-danger mb-0 font-weight-bold">
                {errors.confirmPassword ? errors.confirmPassword : apiError}
              </p>
              <button
                className="model-change-btn mt-4"
                form="change-form"
                type="submit"
                data-bs-target="#staticBackdrop"
              >
                <p className="fw-normal py-2 mb-1">CHANGE</p>
              </button>
              <div
                id="close-button"
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
