import React from "react";

interface Props {
  email: string;
  errors: any;
  handleChange: any;
  handleBlur: any;
  submitEmail?: any;
}

export default function EmailForm(props: Props) {
  const { email, handleChange, handleBlur, errors, submitEmail } = props;
  return (
    <div className="login-container py-5">
      <div className="container bg-white p-0 mt-5" style={{ width: "360px" }}>
        <img
          src="https://constant.myntassets.com/pwa/assets/img/banner_login_landing_300.jpg"
          alt=""
          width="100%"
        />
        <div className="mx-4 mt-4">
          <form onSubmit={submitEmail}>
            <div className="form-group mt-3">
              <label className="form-control-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control login-form-control"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="text-danger mb-0 font-weight-bold">
                {errors.email}
              </p>
            </div>
           
            <div className="mt-3">
              <input
                className="btn btn-block login-btn"
                type="submit"
                value="Continue"
              />
            </div>
            <div style={{ paddingTop: "50px" }} className="mb-5"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
