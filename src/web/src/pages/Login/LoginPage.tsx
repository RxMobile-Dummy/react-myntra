import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import { Login, ResetLoginState, RootState } from "core";
import { useDispatch, useSelector } from "react-redux";
import {
  isUserSessions,
  setUserData,
  setUserSession,
} from "../../utils/Storage";

export default function LoginPage() {
  let navigate = useNavigate();

  useEffect(() => {
    if (isUserSessions()) {
      navigate("/");
    }
  });

  const dispatch = useDispatch();

  let { loginData, error } = useSelector((state: RootState) => state.auth);

  console.log("data:::", loginData);
  console.log("error:::", error);

  useEffect(() => {
    if (loginData) {
      console.log("data:::us: ", loginData);
      setUserSession(loginData.token, loginData._id);
      setUserData(loginData);
      navigate("/");
    } else if (error) {
      console.log("error:::us: ", error);
      NotificationManager.error(error, "", 2000);
      dispatch<any>(ResetLoginState());
    }
  }, [loginData, error]);

  const [user, setUser] = useState({
    email: "",
    password: "",
    fcmToken: "werwer4324",
    deviceId: "234423423",
    role: "user",
  });

  const handleChange = (event: any) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    console.log("handleSubmit called");
    event.preventDefault();
    dispatch<any>(Login(user));
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
}
