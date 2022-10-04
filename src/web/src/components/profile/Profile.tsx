import React from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../../utils/Storage";
import Button from "../button/Button";
import MenuText from "../text/MenuText";
import "./Profile.css";

const Profile = () => {
  const profileData = getUserData();
  return (
    <div className="profile-container">
      <MenuText
        color="black"
        fontWeight="600"
        fontSize="16px"
        name={"Profile Details"}
      />
      <div className="border-top mt-3 mb-3 profile-data">
        <table className="table table-borderless mt-3">
          <tbody>
            <tr>
              <td>Full Name</td>
              <td>{profileData?.fullName}</td>
            </tr>
            <tr>
              <td>Mobile Number</td>
              <td>{profileData?.mobileNo}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{profileData?.email}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{profileData?.gender}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{profileData?.dob}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{profileData?.country}</td>
            </tr>
            {/* <tr>
              <td>Alternate mobile</td>
              <td>-not added-</td>
            </tr>
            <tr>
              <td>Hint name</td>
              <td>-not added-</td>
            </tr> */}
          </tbody>
        </table>
        <Link to="/profile/editprofile">
          <Button title={"EDIT"} />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
