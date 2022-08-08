import React from "react";
import Button from "../button/Button";
import MenuText from "../text/MenuText";
import "./EditProfile.css";
import { MdDone } from "react-icons/md";
import ChangePasswordDialog from "../dialog/ChangePasswordDialog";

const EditProfile = () => {
  return (
    <div className="edit-container">
      <MenuText
        color="black"
        fontWeight="600"
        fontSize="16px"
        name={"Profile Details"}
      />
      <div className="border-top mt-3 py-3 profile-data">
        <div className="border p-2 mobile-div">
          <div>
            <p className="fw-light mb-1">Mobile Number*</p>
            <p className="fw-normal mb-1">2342342342</p>
          </div>
          <div className="border change-btn">
            <p className="fw-normal py-2 mb-1">Change</p>
          </div>
        </div>
        <div className="material-textfield mt-4">
          <input placeholder=" " type="text" />
          <label>Full Name*</label>
        </div>
        <div className="material-textfield mt-4">
          <input placeholder=" " type="text" />
          <label>Email</label>
        </div>
        <div className="gender-div mt-4">
          <div className="border change-btn">
            <p className="fw-normal py-2 mb-1">Male</p>
            <MdDone className="mb-1" color="#FF3E6B" />
          </div>
          <div className="border change-btn">
            <p className="fw-normal py-2 mb-1">Female</p>
            <MdDone className="mb-1" color="#FF3E6B" />
          </div>
        </div>
        <div className="material-textfield mt-4">
          <input placeholder=" " type="text" />
          <label>Birthday (dd/mm/yyyy)</label>
        </div>
        <div className="material-textfield mt-4">
          <input placeholder=" " type="text" />
          <label>Location</label>
        </div>
        <p className="fw-normal my-4">Alternate mobile details</p>
        <div className="material-textfield mt-4">
          <input placeholder=" " type="text" />
          <label>Mobile Number</label>
        </div>
      </div>
      <Button title={"SAVE DETAILS"} />
      <div
        className="border change-btn mt-4"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <p className="fw-normal py-2 mb-1"> CHANGE PASSWORD</p>
      </div>
      {/* change password dialog */}
      <ChangePasswordDialog />
    </div>
  );
};

export default EditProfile;
