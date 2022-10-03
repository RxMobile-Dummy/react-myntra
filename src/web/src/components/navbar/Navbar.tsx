import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MenuData } from "../../constants/MenuData";
import "./Navbar.css";
import { FaUser, FaBookmark, FaShoppingBag } from "react-icons/fa";
import {
  getToken,
  getUserId,
  isUserSessions,
  removeUserSession,
} from "../../utils/Storage";
import { useNavigate } from "react-router-dom";
import { RootState, Logout } from "core";
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";

const Navbaar = () => {
  let navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);
  const [bagItems, setBagItems] = useState(0);

  const dispatch = useDispatch();

  let { logoutData, logoutError } = useSelector(
    (state: RootState) => state.logoutReducer
  );

  useEffect(() => {
    if (logoutData) {
      console.log("data:::us: ", logoutData);
      removeUserSession();
      navigate("/login");
      window.location.reload();
    } else if (logoutError) {
      console.log("error:::us: ", logoutError);
      NotificationManager.error(logoutError, "", 2000);
    }
  }, [logoutData, logoutError]);

  useEffect(() => {
    if (isUserSessions()) {
      setIsLoggedIn(true);
    }
  });

  const onLogoutPress = () => {
    const reqData = {
      userId: getUserId() || "",
      authToken: getToken() || "",
    };
    dispatch<any>(Logout(reqData));
  };

  const setNewNavExpanded = (expanded: any) => {
    setNavExpanded(expanded);
  };

  const closeNav = () => {
    setNavExpanded(false);
  };
  return (
    <div className="navbar-container">
      <Navbar
        onToggle={setNewNavExpanded}
        expanded={navExpanded}
        expand="lg"
        fixed="top"
        className="navbar navbar-expand-lg navbar-light fixed-top"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="../../myntra-logo.png"
              alt="Logo"
              height="50"
              width="50"
            />
          </Link>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <ul
              className="navbar-nav px-3 navbar-left-link-container"
              style={{ fontWeight: "400" }}
            >
              {MenuData.map((menu, index) => {
                return (
                  <li key={index} className="nav-item px-2">
                    <div className="nav-link" data-toggle="dropdown">
                      <div className="dropdown navbar-dropdown-container menu-dropdown">
                        <div aria-haspopup="true" aria-expanded="false">
                          {menu.menuName}
                        </div>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          {menu.subMenuList.map((subMenu, index) => {
                            return (
                              <Link
                                key={index}
                                to={subMenu.link}
                                className="text-capitalize dropdown-item"
                                onClick={closeNav}
                              >
                                {subMenu.subMenuName}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="search_container ml-auto">
              <ul
                className="navbar-nav"
                style={{ fontSize: "13px", fontWeight: "400" }}
              >
                {/* <li className="nav-item mr-3">
                  <div className="input-group mt-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaSearch aria-hidden="true" className="text-muted" />
                      </span>
                    </div>
                    <input
                      className="form-control d-block form-control-lg"
                      type="search"
                      style={{ height: "30px" }}
                    />
                  </div>
                </li> */}
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="nav-icon-container dropdown navbar-dropdown-container">
                      <div
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="text-center text-muted">
                          <FaUser aria-hidden="true" />
                        </div>
                        <div>Profile</div>
                      </div>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link className="dropdown-item" to="/orders">
                          Orders
                        </Link>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                        <div className="dropdown-hr"></div>
                        <div className="dropdown-item">
                          {isLoggedIn ? (
                            <button
                              onClick={onLogoutPress}
                              className="btn btn-sm navbar-login-btn"
                            >
                              Logout
                            </button>
                          ) : (
                            <Link
                              to="/login"
                              className="btn btn-sm navbar-login-btn"
                            >
                              LOGIN/SIGNUP
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* **************** */}
                <li className="nav-item">
                  <Link to="/wishlist" className="nav-link">
                    <div className="nav-icon-container">
                      <div className="text-center text-muted">
                        <FaBookmark aria-hidden="true" />
                      </div>
                      <div>Wishlist</div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link id="view-bag" to="/bag" className="nav-link">
                    <div className="nav-icon-container">
                      {bagItems > 0 && (
                        <div className="bag-items-count">{bagItems}</div>
                      )}
                      <div className="text-center text-muted">
                        <FaShoppingBag aria-hidden="true" />
                      </div>

                      <div>Bag</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className="navbar search-container2 pt-2">
        <div className="container-fluid">
          {/* <div className="input-group mt-3 ml-auto serach_box">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaSearch aria-hidden="true" className="text-muted" />
              </span>
            </div>
            <input
              className="form-control d-block form-control-lg"
              type="search"
              style={{ height: "30px" }}
            />
          </div> */}
          <div className="nav-item">
            {/* **************** */}
            <div className="nav-item">
              <div className="nav-link">
                <div className="nav-icon-container dropdown navbar-dropdown-container">
                  <div data-toggle="dropdown">
                    <div className="text-center text-muted">
                      <FaUser aria-hidden="true" />
                    </div>
                    <div>Profile</div>
                  </div>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/orders">
                      Orders
                    </Link>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                    <div className="dropdown-hr"></div>
                    <div className="dropdown-item">
                      {isLoggedIn ? (
                        <button
                          onClick={onLogoutPress}
                          className="btn btn-sm navbar-login-btn"
                        >
                          Logout
                        </button>
                      ) : (
                        <Link
                          to="/login"
                          className="btn btn-sm navbar-login-btn"
                        >
                          LOGIN/SIGNUP
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* **************** */}
          </div>
          <div className="nav-item">
            <Link to="/wishlist" className="nav-link">
              <div className="nav-icon-container">
                <div className="text-center text-muted">
                  <FaBookmark aria-hidden="true" />
                </div>
                <div className="text-dark">Wishlist</div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/bag" className="nav-link">
              <div className="nav-icon-container">
                {bagItems > 0 && (
                  <div className="medium-bag-items-count">{bagItems}</div>
                )}
                <div className="text-center text-muted">
                  <FaShoppingBag aria-hidden="true" />
                </div>
                <div className="text-dark">Bag</div>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="container-fluid">
          <div className="input-group mt-3 ml-auto serach_box_small">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaSearch aria-hidden="true" className="text-muted" />
              </span>
            </div>
            <input
              className="form-control d-block form-control-lg"
              type="search"
              style={{ height: "30px" }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbaar;
