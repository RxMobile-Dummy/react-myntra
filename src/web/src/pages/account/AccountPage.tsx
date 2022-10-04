import React, { useEffect } from "react";
import MenuText from "../../components/text/MenuText";
import "./AccountPage.css";
import { ProfileMenu } from "../../constants/ProfileMenu";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getUserData, isUserSessions } from "../../utils/Storage";
const AccountPage = () => {
  //   let { path, url } = useMatch();

  let navigate = useNavigate();

  useEffect(() => {
    if (!isUserSessions()) {
      navigate("/login");
    }
  });

  return (
    <div className="parent-container">
      <MenuText color="black" fontWeight="600" name={"Account"} />
      <MenuText color="black" name={"Arjun Patidar"} />
      <div className="border-top mt-3"></div>
      <div className="main-container">
        <div className="menu-container">
          {ProfileMenu.map((menus, index) => {
            return (
              <div key={index}>
                <div className="border-top"></div>
                <div className="menu">
                  {/* <MenuText color="black" name={menus.menuTitle} /> */}
                  <div>{menus.menuTitle}</div>
                  {menus.menus.map((menu, index) => {
                    return (
                      <div
                        className="menu-div"
                        key={index}
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <Link to={menu.menuLink}>
                          <MenuText color="black" name={menu.menuName} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* <Routes>
          {/* <Route exact path={path} element={<Profile />}></Route> */}
        {/* <Profile />
        </Routes> */}
        {/* <Profile /> */}
        {/* <EditProfile /> */}
        {/* <Addresses /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;
