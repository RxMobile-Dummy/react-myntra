import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

import {
  Credential,
  signInAction,
  signOutAction,
  StateType,
  User,
  userSelector,
  signUpAction,
} from "core";
import { connect } from "react-redux";

// interface Props {
//   props?: any;
// }
interface Props {
  user: User | null;
  dispatchSignIn: (credential: Credential) => void;
  dispatchSignUp: (
    firstName: string,
    lastName: string,
    credential: Credential
  ) => void;
  dispatchSignOut: () => void;
}

// export default function LoginPage(props: Props) {
export const AppModel = (props: Props) => {
  const onSignIn = (email: string, password: string) =>
    props.dispatchSignIn(new Credential(email, password));
  const onSignUp = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) =>
    props.dispatchSignUp(firstName, lastName, new Credential(email, password));

  const [user, setUser] = useState({
    role: "customer",
    email: "",
    password: "",
  });

  console.log("User ::: ", props.user);

  const handleChange = (event: any) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    console.log("handleSubmit called");
    event.preventDefault();
    onSignIn("email@email.com", "abc123");
  };

  return (
    <>
      <div className="login-container py-5">
        <div className="container bg-white p-0" style={{ width: "360px" }}>
          <img
            src="https://constant.myntassets.com/pwa/assets/img/banner_login_landing_300.jpg"
            alt=""
            width="100%"
          />
          <div className="mx-4 mt-4">
            <div
              className="text-center text-highlighted"
              style={{ fontSize: "25px", letterSpacing: "2px" }}
            >
              <span>Login</span>
            </div>
            <form className="form-cus" onSubmit={handleSubmit}>
              {/* <div className="form-group mt-4">
                <label className="form-control-label " htmlFor="usertype">
                  Select User Type
                </label>
                <select
                  className="form-control login-form-control"
                  name="role"
                  id="role"
                  value={user.role}
                  onChange={handleChange}
                >
                  <option value="seller">Admin</option>
                  <option value="customer">User</option>
                </select>
              </div> */}
              <div className="form-group mt-3">
                <label className="form-control-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control login-form-control"
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-control-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control login-form-control"
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-muted mt-4">
                By Continuing, I agree to the{" "}
                <span className="text-highlighted">Terms of Usage</span> &#38;{" "}
                <span className="text-highlighted">Privacy Policy</span>
              </div>
              <div className="mt-3">
                <input
                  className="btn btn-block login-btn"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="text-muted mt-3 text-center">
                Don't have an account?{" "}
                <Link className="text-highlighted register-link" to="/register">
                  Register
                </Link>
              </div>
              <div className="text-muted mt-1 text-center">
                Forget Password?{" "}
                <Link
                  className="text-highlighted register-link"
                  to="/forget-password"
                >
                  Change Password
                </Link>
              </div>
              <div style={{ paddingTop: "25px" }}></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state: StateType) => ({
  user: userSelector(state),
});

const mapDispatchToProps = {
  dispatchSignIn: signInAction,
  dispatchSignUp: signUpAction,
  dispatchSignOut: signOutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModel);
