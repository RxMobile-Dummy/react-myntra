import React from "react";
import "./ChangePassword.css"

export default function ChangePassword({
  newPassword,
  confirmNewPassword,
  passwordsChange,
  passwordsBlur,
  changePassword,
  errors,
  email,
  otp,
  resendEmail
}) {
  return (
    <div className="login-container py-5">
      <div className="container bg-white p-0 mt-5" style={{ width: "360px" }}>
        <img
          src="https://constant.myntassets.com/pwa/assets/img/banner_login_landing_300.jpg"
          alt=""
          width="100%"
        />
        <div className="mx-4 mt-4">
          <form onSubmit={changePassword}>
            <div className="form-group mt-2">
              <span className="mobile-text"
              ><b className="text-dark">Enter the code we just sent on your email </b>
                <b className="text-color">{email}</b>
              </span>
              <br />
              <label className="form-control-label mt-2" htmlFor="newPassword">
                OTP
              </label>
              <input
                className="form-control login-form-control"
                type="number"
                name="otp"
                id="otp"
                value={otp}
                onChange={passwordsChange}
                onBlur={passwordsBlur}
              />
              <p className="text-danger mb-0 font-weight-bold">
                {errors.otp}
              </p>
              <label className="form-control-label" htmlFor="newPassword">
                New Password
              </label>
              <input
                className="form-control login-form-control"
                type="password"
                name="newPassword"
                id="newPassword"
                value={newPassword}
                onChange={passwordsChange}
                onBlur={passwordsBlur}
              />
              <p className="text-danger mb-0 font-weight-bold">
                {errors.newPassword}
              </p>
            </div>
            <div className="form-group">
              <label
                className="form-control-label"
                htmlFor="confirmNewPassword"
              >
                Confirm New Password
              </label>
              <input
                className="form-control login-form-control"
                type="password"
                name="confirmNewPassword"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={passwordsChange}
                onBlur={passwordsBlur}
              />
              <p className="text-danger mb-0 font-weight-bold">
                {errors.confirmNewPassword}
              </p>
            </div>
            <div className="pt-1"></div>
            <div className="mt-4">
              <input
                className="btn btn-block login-btn"
                type="submit"
                value="Change Password"
              />
            </div>
            <div className="text-muted mt-3 text-center">
              Don't receive a code?{" "}
              <span onClick={resendEmail} className="text-highlighted register-link btn btn-link">
                Resend
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
