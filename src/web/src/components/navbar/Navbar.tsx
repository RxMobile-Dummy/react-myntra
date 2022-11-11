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
import { RootState, Logout, ResetLogoutState, GetAllMainCategory } from "core";
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";
import { GetCategoryListActionCreator } from "core";

const Navbaar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mnCategory, setMnCategory] = useState([]);
  const [navExpanded, setNavExpanded] = useState(false);
  const [bagItems, setBagItems] = useState(0);

  let { logoutData, logoutError } = useSelector(
    (state: RootState) => state.logoutReducer
  );

  let { categoryList, categoryError } = useSelector(
    (state: RootState) => state.getCategoryListReducer
  );
  // console.log("Category List state::", categoryList);

  const allMainCategory = async () => {
    setIsLoading(true);
    let userRequest: any = {
      authToken: localStorage.getItem("token"),
    };
    let allMainResponse = await dispatch<any>(
      GetCategoryListActionCreator(userRequest)
    );

    if (allMainResponse.status) {
      NotificationManager.success(
        "Maincategory fetched successfully",
        "",
        2000
      );
      let arrayObj = allMainResponse.resultData.map((item: any) => {
        if (item.category.length <= 0) {
          let obj = {
            id: item._id,
            categoryName: item.mainCategory,
            subCategory: item.category.concat({
              name: "",
              id: "",
            }),
          };
          return obj;
        } else {
          return {
            id: item._id,
            categoryName: item.mainCategory,
            subCategory: item.category.map((cur: any) => {
              return {
                name: cur.Categoryname,
                id: cur._id,
              };
            }),
          };
        }
      });
      setMnCategory(categoryList);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    allMainCategory();
  }, []);

  // useEffect(() => {
  //   if (logoutData) {
  //     console.log("data:::us: ", logoutData);
  //     removeUserSession();
  //     navigate("/login");
  //     window.location.reload();
  //   } else if (logoutError) {
  //     console.log("error:::us: ", logoutError);
  //     NotificationManager.error(logoutError, "", 2000);
  //   }
  // }, [logoutData, logoutError]);

  useEffect(() => {
    if (isUserSessions()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  const onLogoutPress = async () => {
    try {
      const reqData: any = {
        userId: localStorage.getItem("userId") || "",
        authToken: localStorage.getItem("token") || "",
      };
      const logoutData2 = await dispatch<any>(Logout(reqData));
      // console.log("logoutData:::", logoutData2);

      if (logoutData2.status) {
        navigate("/login");
        removeUserSession();
        window.location.reload();
      } else if (logoutError) {
        // console.log("error:::us: ", logoutError);
        NotificationManager.error(logoutError, "", 2000);
      }
    } catch (error: any) {
      console.log("error::", error);
    }
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
              {categoryList.map((menu, index) => {
                return (
                  <li key={index} className="nav-item px-2">
                    <div className="nav-link" data-toggle="dropdown">
                      <div className="dropdown navbar-dropdown-container menu-dropdown">
                        <div aria-haspopup="true" aria-expanded="false">
                          {menu.mainCategory}
                        </div>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          {menu.category.map((subMenu, index) => {
                            return (
                              <Link
                                key={index}
                                to={
                                  "/main-category/" +
                                  menu.mainCategory +
                                  "/" +
                                  subMenu.Categoryname
                                }
                                className="text-capitalize dropdown-item"
                                onClick={closeNav}
                              >
                                {subMenu.Categoryname}
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
                        <Link className="dropdown-item" to="/profile/orders">
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
