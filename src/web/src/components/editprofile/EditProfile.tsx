import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import MenuText from "../text/MenuText";
import "./EditProfile.css";
import { MdDone } from "react-icons/md";
import ChangePasswordDialog from "../dialog/ChangePasswordDialog";

import {useDispatch, useSelector } from "react-redux";
import {getToken, getUserId, isUserSessions } from "../../utils/Storage";
import { NotificationManager } from "react-notifications"

import {
  ChangePassword,
  confirmPasswordValidation,
  passwordValidation,
  RootState
} from "core";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  let navigate = useNavigate();

  const [inputData, setInputData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [hideDialog, setHideDialog] = useState(false);
  
  useEffect(() => {
    if(!isUserSessions()){
      navigate("/login");
    }
  });

  const dispatch = useDispatch()

  let { data, error } = useSelector(
    (state: RootState) => state.changePasswordReducer
  );

  console.log("data:::", data);
  console.log("error:::", error);

  useEffect(() => {
    if(data){
    console.log("data:::us: ", data);
    setInputData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
    const closeButton = document.getElementById("close-button") as HTMLElement
    closeButton.click();

    NotificationManager.success(data,"", 2000);
    // navigate("/");
    }else if(error){
      console.log("error:::us: ", error);
      NotificationManager.error(error,"", 2000);
      error = undefined;
    }
  }, [data, error]);

  const handleChange = (event: any) => {
    event.preventDefault();
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const onClickPasswordChange = async (event) => {
    event.preventDefault();

    const isValid = validateForm()
    if(isValid){
    const reqData = {
      userId: getUserId() || "",
      // userId: "632b35e408c2ef17b15059d6",
      oldPassword: inputData.oldPassword,
      newPassword: inputData.newPassword,
      authToken: getToken() || "",
    }
    setHideDialog(true)
    const res = await dispatch<any>(ChangePassword(reqData))
    console.log("dispatch response: " + res)
  }else{
    setHideDialog(false)
  }
  }

  const validate = {
    oldPassword: (password: string) => passwordValidation(password),
    newPassword: (password: string) => passwordValidation(password),
    confirmPassword: (confirmPassword: any) =>
      confirmPasswordValidation(confirmPassword, inputData.newPassword),
    };

  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleBlur = async (event: any) => {
    const { name, value } = event.target;

    let error = validate[name](value);

    setErrors({ ...errors, [name]: error });
  };

  // ********** FORM VALIDATION FUNCTION **********
  const validateForm = () => {
    let valid = true;
    let error = null;
    let tempErrors = errors;

    for (const item in inputData) {
      error = validate[item](inputData[item]);

      if (error) {
        valid = false;
      }
      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors({ ...tempErrors });

    return valid;
  };

  const onClickCancel = () => {
    
  }
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
      <ChangePasswordDialog
        onClickChange={onClickPasswordChange}
        onClickCancel={onClickCancel}
        handleChange={handleChange}
        apiError={error}
        errors={errors}
        hideDialog={hideDialog}
        handleBlur={handleBlur}/>
    </div>
  );
};

export default EditProfile;
