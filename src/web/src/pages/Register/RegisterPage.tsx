import React, { useEffect, useMemo, useState } from "react";
import RegisterForm from "../../components/registerpage/RegisterForm";
import { NotificationManager } from "react-notifications";

import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";

import {
  Register,
  RootState,
  nameValidation,
  emailValidation,
  contactNumberValidation,
  dobValidation,
  passwordValidation,
  confirmPasswordValidation,
  selectionValidation,
  ResetRegisterState,
} from "core";
import { useDispatch, useSelector } from "react-redux";
import {
  isUserSessions,
  setUserData,
  setUserSession,
} from "../../utils/Storage";

interface Props {
  props?: any;
}
export default function RegisterPage(props: Props) {
  let navigate = useNavigate();

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    console.log("value: ", value);
    console.log("countryList: ", countryList().getData());
    setValue(value);
    setCustomer({
      ...customer,
      country: value.label,
    });
  };

  const register = async (event) => {
    event.preventDefault();

    let isValidForm = validateForm();
    // let isValidForm = true

    console.log("country ::", country);
    if (isValidForm) {
      try {
        let reqData = {
          customerName: name,
          email,
          contactNumber,
          dob,
          gender,
          password,
          country,
          platform: "web",
          fcmToken: "3243242asdsa",
          deviceId: "348723784238",
        };
        await dispatch<any>(Register(reqData));
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      NotificationManager.error("Invalid Input", "", 2000);
    }
  };

  const dispatch = useDispatch();

  let { data, error } = useSelector(
    (state: RootState) => state.registerReducer
  );

  console.log("data:::", data);
  console.log("error:::", error);

  useEffect(() => {
    if (isUserSessions()) {
      navigate("/");
    }
  });

  useEffect(() => {
    if (data) {
      console.log("data:::us: ", data);
      NotificationManager.success("User registered successfully", "", 1000);
      setUserSession(data.token, data._id);
      setUserData(data);
      navigate("/");
    } else if (error) {
      console.log("error:::us: ", error);
      NotificationManager.error(error, "", 2000);
      dispatch<any>(ResetRegisterState());
    }
  }, [data, error]);

  const [isBtnDisable, setIsBtnDisable] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    contactNumber: "",
    dob: "",
    gender: "male",
    password: "",
    confirmPassword: "",
    country: "select",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contactNumber: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    country: "",
  });

  const validate = {
    name: (name: string) => nameValidation("Name", name),
    email: (email: string) => emailValidation(email),
    contactNumber: (contactNumber: string) =>
      contactNumberValidation(contactNumber),
    dob: (dob: string) => dobValidation(dob),
    gender: () => {},
    password: (password: string) => passwordValidation(password),
    confirmPassword: (confirmPassword: any) =>
      confirmPasswordValidation(confirmPassword, password),
    country: (country: any) => selectionValidation("Country", country),
  };

  // ********** HANDLE CHANGE FUNCTION **********
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  // ********** HANDLE BLUR FUNCTION **********
  const handleBlur = async (event: any) => {
    const { name, value } = event.target;

    let error = validate[name](value);

    // if (name === "email") {
    //   try {
    //     // await CustomerService.getCustomerByEmail(value);
    //     error = "Email is already used";
    //     setIsBtnDisable(true);
    //   } catch (error) {
    //     console.error(error);
    //     setIsBtnDisable(false);
    //   }
    // }

    setErrors({ ...errors, [name]: error });
  };

  // ********** FORM VALIDATION FUNCTION **********
  const validateForm = () => {
    let valid = true;
    let error = null;
    let tempErrors = errors;

    for (const item in customer) {
      error = validate[item](customer[item]);

      if (error) {
        valid = false;
      }

      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors({ ...tempErrors });

    return valid;
  };

  // ********** DESTRUCTRING OF CUSTOMER **********
  const { name, email, contactNumber, dob, gender, password, country } =
    customer;

  return (
    <>
      <RegisterForm
        customer={customer}
        errors={errors}
        handleChange={handleChange}
        handleBlur={handleBlur}
        register={register}
        isBtnDisable={isBtnDisable}
        countryChangeHandler={changeHandler}
        countries={options}
        countryValue={value}
      />
    </>
  );
}
