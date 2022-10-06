import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import MenuText from "../text/MenuText";
import "./EditProfile.css";
import { MdDone } from "react-icons/md";
import ChangePasswordDialog from "../dialog/ChangePasswordDialog";

import { useDispatch, useSelector } from "react-redux";
import {
  getToken,
  getUserData,
  getUserId,
  isUserSessions,
  setUserData,
} from "../../utils/Storage";
import { NotificationManager } from "react-notifications";

import {
  ChangePassword,
  confirmPasswordValidation,
  dobValidation,
  fieldValidation,
  nameValidation,
  passwordValidation,
  ResetChangePasswordState,
  ResetEditProfileState,
  RootState,
  EditProfile,
} from "core";
import { useNavigate } from "react-router-dom";

const EditProfileComp = () => {
  let navigate = useNavigate();

  const [profileData, setProfileData] = useState() as any;

  const [inputData, setInputData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [profileErrors, setProfileErrors] = useState({
    fullName: "",
    dob: "",
    gender: "",
    country: "",
  });

  const [hideDialog, setHideDialog] = useState(false);

  useEffect(() => {
    if (!isUserSessions()) {
      navigate("/login");
    }
  });

  const dispatch = useDispatch();

  let { data, error } = useSelector(
    (state: RootState) => state.changePasswordReducer
  );

  let { editProfileData, editProfileError } = useSelector(
    (state: RootState) => state.editProfileReducer
  );

  console.log("data:::", data);
  console.log("error:::", error);
  console.log("editProfileData:::", editProfileData);
  console.log("editProfileError:::", editProfileError);

  useEffect(() => {
    if (data) {
      console.log("data:::us: ", data);
      setInputData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      const closeButton = document.getElementById(
        "close-button"
      ) as HTMLElement;
      closeButton.click();

      NotificationManager.success(data, "", 2000);
      dispatch<any>(ResetChangePasswordState());
      // navigate("/");
    } else if (error) {
      console.log("error:::us: ", error);
      NotificationManager.error(error, "", 2000);
      dispatch<any>(ResetChangePasswordState());
    }
  }, [data, error]);

  useEffect(() => {
    if (editProfileData) {
      console.log("data:::us: ", editProfileData);

      NotificationManager.success("Profile Updated", "", 2000);
      // setProfileData([...profileData, editProfileData]);
      setProfileData({ ...profileData, editProfileData });

      setUserData(profileData);
      dispatch<any>(ResetEditProfileState());
      // navigate("/");
    } else if (editProfileError) {
      console.log("error:::us: ", editProfileError);
      NotificationManager.error(editProfileError, "", 2000);
      dispatch<any>(ResetEditProfileState());
    }
  }, [editProfileData, editProfileError]);

  const handleChange = (event: any) => {
    event.preventDefault();
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const handleProfileChange = (event: any) => {
    event.preventDefault();
    setProfileData({ ...profileData, [event.target.name]: event.target.value });
  };

  const onClickPasswordChange = async (event) => {
    event.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      const reqData = {
        userId: getUserId() || "",
        // userId: "632b35e408c2ef17b15059d6",
        oldPassword: inputData.oldPassword,
        newPassword: inputData.newPassword,
        authToken: getToken() || "",
      };
      setHideDialog(true);
      const res = await dispatch<any>(ChangePassword(reqData));
      console.log("dispatch response: " + res);
    } else {
      setHideDialog(false);
    }
  };

  const validate = {
    oldPassword: (password: string) => passwordValidation(password),
    newPassword: (password: string) => passwordValidation(password),
    confirmPassword: (confirmPassword: any) =>
      confirmPasswordValidation(confirmPassword, inputData.newPassword),
  };

  const validateProfile = {
    fullName: (name: string) => nameValidation("Name", name),
    dob: (password: string) => dobValidation(password),
    gender: (gender: any) => fieldValidation("Gender", gender),
    country: (country: any) => fieldValidation("Country", country),
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

  const handleProfileBlur = async (event: any) => {
    const { name, value } = event.target;

    let error = validateProfile[name](value);

    setProfileErrors({ ...profileErrors, [name]: error });
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

  const validateProfileForm = () => {
    let valid = true;
    let error = null;
    let tempErrors = profileErrors;

    const tempData = {
      fullName: profileData.fullName,
      dob: profileData.dob,
      country: profileData.country,
      gender: profileData.gender,
    };

    for (const item in tempData) {
      error = validateProfile[item](tempData[item]);

      if (error) {
        valid = false;
      }
      tempErrors = { ...tempErrors, [item]: error };
    }

    setProfileErrors({ ...tempErrors });

    return valid;
  };

  useEffect(() => {
    let data = getUserData();
    console.log("data :: ", JSON.stringify(data));
    setProfileData(data);
  }, []);
  const onGenderClick = (gender: string) => {
    setProfileData({ ...profileData, gender: gender });
  };

  const onProfileSaveClick = (e: any) => {
    e.preventDefault();
    const isValid = validateProfileForm();
    console.log("isValid :: ", isValid);
    if (isValid) {
      const reqData = {
        userId: getUserId() || "",
        authToken: getToken() || "",
        fullName: profileData.fullName,
        gender: profileData.gender,
        dob: profileData.dob,
        country: profileData.country,
      };
      dispatch<any>(EditProfile(reqData));
    }
  };

  const onClickCancel = () => {};
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
            <p className="fw-normal mb-1">{profileData?.mobileNo}</p>
          </div>
          <div className="border change-btn">
            <p className="fw-normal py-2 mb-1">Change</p>
          </div>
        </div>
        <div className="material-textfield mt-4">
          <input
            placeholder=" "
            type="text"
            value={profileData?.fullName}
            name="fullName"
            onChange={handleProfileChange}
            onBlur={handleProfileBlur}
          />
          <label>Full Name*</label>
        </div>
        <p className="text-danger mb-0 font-weight-bold">
          {profileErrors.fullName}
        </p>
        <form onSubmit={onProfileSaveClick}>
          <div className="material-textfield mt-4">
            <input
              placeholder=" "
              type="text"
              disabled
              value={profileData?.email}
            />
            <label>Email*</label>
          </div>
          <div className="gender-div mt-4">
            <div
              className="border change-btn"
              onClick={() => {
                onGenderClick("male");
              }}
            >
              <p className="fw-normal py-2 mb-1">Male</p>
              {profileData?.gender === "male" ? (
                <MdDone className="mb-1" color="#FF3E6B" />
              ) : undefined}
            </div>
            <div
              className="border change-btn"
              onClick={() => {
                onGenderClick("female");
              }}
            >
              <p className="fw-normal py-2 mb-1">Female</p>
              {profileData?.gender === "female" ? (
                <MdDone className="mb-1" color="#FF3E6B" />
              ) : undefined}
            </div>
          </div>
          <div className="material-textfield mt-4">
            <input
              placeholder=" "
              type="date"
              name="dob"
              value={profileData?.dob}
              onChange={handleProfileChange}
              onBlur={handleProfileBlur}
            />
            <label>Birthday (dd/mm/yyyy)*</label>
          </div>
          <p className="text-danger mb-0 font-weight-bold">
            {profileErrors.dob}
          </p>

          <div className="material-textfield mt-4">
            <input
              placeholder=" "
              type="text"
              value={profileData?.country}
              name="country"
              onChange={handleProfileChange}
              onBlur={handleProfileBlur}
            />
            <label>Location*</label>
          </div>
          <p className="text-danger mb-0 font-weight-bold mb-4">
            {profileErrors.country}
          </p>

          {/* <p className="fw-normal my-4">Alternate mobile details</p>
          <div className="material-textfield my-4">
            <input placeholder=" " type="text" />
            <label>Mobile Number</label>
          </div> */}
          <Button title={"SAVE DETAILS"} />
        </form>
      </div>
      <div
        className="border change-btn mt-1"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <p className="fw-normal py-2 mb-1"> CHANGE PASSWORD</p>
      </div>
      {/* change password dialog */}
      <ChangePasswordDialog
        data={inputData}
        onClickChange={onClickPasswordChange}
        onClickCancel={onClickCancel}
        handleChange={handleChange}
        apiError={error}
        errors={errors}
        hideDialog={hideDialog}
        handleBlur={handleBlur}
      />
    </div>
  );
};

export default EditProfileComp;
