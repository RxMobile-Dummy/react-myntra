import React, { useEffect, useState } from "react";
// import CustomerService from "../services/CustomerService";
// import CountryService from "../services/CountryService";
// import StateService from "../services/StateService";
// import CityService from "../services/CityService";
// import OtpService from "../services/OtpService";

import RegisterForm from "../../components/registerpage/RegisterForm";
import EmailForm from "../../components/registerpage/EmailForm";
import OtpForm from "../../components/registerpage/OtpForm";
// import { NotificationManager } from "react-notifications";

interface Props {
  props?: any;
}
export default function RegisterPage(props: Props) {
  // ********** LOADING **********
  const [loading, setLoading] = useState(false);

  // ********** COUNTRIES **********
  const [countries, setCountries] = useState([]);

  // ********** STATES **********
  const [states, setStates] = useState([]);

  // ********** CITIES **********
  const [cities, setCities] = useState([]);

  // ********** CITIES **********
  const [isBtnDisable, setIsBtnDisable] = useState(false);

  // ********** CUSTOMER **********
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    contactNumber: "",
    dob: "",
    gender: "male",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    country: "select",
    state: "select",
    city: "select",
  });

  // ********** ERRORS STATE **********
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contactNumber: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
  });

  // ********** OTP STATE **********
  const [otp, setOtp] = useState("");
  const [isOtpAvailable, setIsOtpAvailable] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [userOtp, setUserOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  // ********** USEEFFECT **********
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       let countries = await CountryService.getAllCountries();
  //       setCountries(countries.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   getData();
  // }, []);

  // ********** ON COUNTRY CHANGE FUNCTION **********
  // const countryChange = async (event) => {
  //   try {
  //     let value = event.target.value.toLowerCase();

  //     if (value !== "select") {
  //       let states = await StateService.getAllStates();

  //       states = states.data.filter(
  //         (state) =>
  //           state.country.countryName.toLowerCase() === value.toLowerCase()
  //       );
  //       setStates(states);
  //       setCities([]);
  //       setCustomer({
  //         ...customer,
  //         country: value,
  //         state: "select",
  //         city: "select",
  //       });
  //     } else {
  //       setStates([]);
  //       setCities([]);
  //       setCustomer({
  //         ...customer,
  //         country: "select",
  //         state: "select",
  //         city: "select",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // // ********** ON STATE CHANGE FUNCTION **********
  // const stateChange = async (event) => {
  //   try {
  //     let value = event.target.value.toLowerCase();

  //     if (value !== "select") {
  //       let cities = await CityService.getAllCities();

  //       cities = cities.data.filter(
  //         (city) => city.state.stateName.toLowerCase() === value.toLowerCase()
  //       );

  //       setCities(cities);
  //       setCustomer({
  //         ...customer,
  //         state: value,
  //         city: "select",
  //       });
  //     } else {
  //       setCities([]);
  //       setCustomer({
  //         ...customer,
  //         state: "select",
  //         city: "select",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // ********** VALIDATE OBJECT **********
  const validate = {
    name: (name: string) => nameValidation("Name", name),
    email: (email: string) => emailValidation(email),
    contactNumber: (contactNumber: string) =>
      contactNumberValidation(contactNumber),
    dob: (dob: string) => dobValidation(dob),
    gender: () => {},
    password: (password: string) => passwordValidation(password),
    confirmPassword: (confirmPassword: any) =>
      confirmPasswordValidation(confirmPassword),
    addressLine1: (addressLine1: string) =>
      addressLineValidation("AddressLine1", addressLine1),
    addressLine2: (addressLine2: string) =>
      addressLineValidation("AddressLine1", addressLine2),
    pincode: (pincode: any) => pincodeValidation(pincode),
    country: (country: string) => selectionValidation("Country", country),
    state: (state: string) => selectionValidation("State", state),
    city: (city: string) => selectionValidation("City", city),
  };

  // ********** VALIDATION FUNCTIONS **********
  const nameValidation = (fieldName: string, fieldValue: string) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };

  const emailValidation = (email: string) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return null;
    }
    if (email.trim() === "") {
      return "Email is required";
    }
    return "Enter a valid email";
  };

  const contactNumberValidation = (number: string) => {
    if (number.trim() === "") {
      return "Phone number is required";
    }
    if (/^[0-9]{10}$/.test(number)) {
      return null;
    }

    return "Phone number contains exactly 10 digits";
  };

  const dobValidation = (dob: string) => {
    if (dob.trim() === "") {
      return "Date is required";
    }

    let age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 5) {
      return "Age should be greater than 5";
    }

    return null;
  };

  const passwordValidation = (password: any) => {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(
        password
      )
    ) {
      return null;
    }

    if (password.trim() === "") {
      return "Password is required";
    }
    return "Password must contains minimum 6 characters, at least one letter, one number and one special character";
  };

  const confirmPasswordValidation = (confirmPassword: any) => {
    if (confirmPassword.trim() === "") {
      return "Confirm Password is required";
    }

    if (password !== confirmPassword) {
      return "Password and Confirm password are not same";
    }
  };

  const addressLineValidation = (fieldValue: string, addressLine: string) => {
    if (addressLine.trim() === "") {
      return `${fieldValue} is required`;
    }
  };

  const pincodeValidation = (pincode: any) => {
    if (pincode.trim() === "") {
      return `Pincode is required`;
    }

    if (!/\d{6}/.test(pincode.trim())) {
      return "Pincode must be length of 6 digits";
    }
  };

  const selectionValidation = (fieldName: string, fieldValue: string) => {
    if (fieldValue === "select") {
      return `${fieldName} is required`;
    }
  };
  // ********** END OF VALIDATION FUNCTIONS **********

  // ********** HANDLE CHANGE FUNCTION **********
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  // ********** HANDLE BLUR FUNCTION **********
  const handleBlur = async (event: any) => {
    const { name, value } = event.target;

    let error = validate[name](value);

    if (name === "email") {
      try {
        // await CustomerService.getCustomerByEmail(value);
        error = "Email is already used";
        setIsBtnDisable(true);
      } catch (error) {
        console.error(error);
        setIsBtnDisable(false);
      }
    }

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

  // ********** REGISTER FUNCTION **********
  // const register = async (event) => {
  //   event.preventDefault();

  //   // if (email) {
  //   //   try {
  //   //     await CustomerService.getCustomerByEmail(email);
  //   //     setErrors({ ...errors, email: "Email is already used" });
  //   //     setIsBtnDisable(true);
  //   //     return;
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //     setIsBtnDisable(false);
  //   //   }
  //   // }

  //   let isValidForm = validateForm();

  //   if (isValidForm) {
  //     try {
  //       let data = {
  //         customerName: name,
  //         email,
  //         contactNumber,
  //         dob,
  //         gender,
  //         password,
  //         address: {
  //           addressLine1,
  //           addressLine2,
  //           pincode,
  //           city,
  //           state,
  //           country,
  //         },
  //       };

  //       await CustomerService.addCustomer(data);

  //       setCustomer({
  //         name: "",
  //         email: "",
  //         contactNumber: "",
  //         dob: "",
  //         gender: "male",
  //         password: "",
  //         confirmPassword: "",
  //         addressLine1: "",
  //         addressLine2: "",
  //         pincode: "",
  //         city: "",
  //       });

  //       NotificationManager.success("User registered successfully", "", 2000);
  //       props.history.push("/login");
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   } else {
  //   }
  // };

  // // ********** SUBMIT EMAIL **********
  // const submitEmail = async (event) => {
  //   event.preventDefault();
  //   let isValidEmail = emailValidation(email);
  //   if (isValidEmail === null) {
  //     try {
  //       await CustomerService.getCustomerByEmail(email);
  //       setErrors({ ...errors, email: "Email is already used" });
  //       return;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     try {
  //       setLoading(true);
  //       let res = await OtpService.sendOtp(email);
  //       setIsOtpAvailable(true);
  //       setOtp(res.data);
  //       setLoading(false);
  //       NotificationManager.success("Otp send successfully", "", 2000);
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   } else {
  //     setErrors({ ...errors, email: isValidEmail });
  //   }
  // };

  // ********** OTP CHANGE **********
  const userOtpChange = (event: any) => {
    setUserOtp(event.target.value);
  };

  // ********** VERIFY OTP **********
  const verifyOtp = (event: any) => {
    event.preventDefault();
    if (userOtp === "") {
      setOtpError("Enter otp");
      return;
    }
    if (otp === userOtp) {
      setIsOtpVerified(true);
      // NotificationManager.success("Otp verified successfully", "", 2000);
    } else {
      setOtpError("Incorrect Otp");
    }
  };

  // ********** DESTRUCTRING OF CUSTOMER **********
  const {
    name,
    email,
    contactNumber,
    dob,
    gender,
    password,
    addressLine1,
    addressLine2,
    pincode,
    country,
    state,
    city,
  } = customer;

  // ********** RETURN LOADING **********
  // if (loading) {
  //   return (
  //     <>
  //       <Loading />
  //     </>
  //   );
  // }

  // ********** RETURN **********
  return (
    <>
      {isOtpAvailable === false && isOtpVerified === false && (
        <EmailForm
          email={email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          // submitEmail={submitEmail}
        />
      )}

      {isOtpAvailable && isOtpVerified === false && (
        <OtpForm
          userOtp={userOtp}
          verifyOtp={verifyOtp}
          userOtpChange={userOtpChange}
          otpError={otpError}
        />
      )}

      {isOtpVerified && (
        <RegisterForm
          customer={customer}
          errors={errors}
          countries={countries}
          states={states}
          cities={cities}
          handleChange={handleChange}
          handleBlur={handleBlur}
          // register={register}
          // countryChange={countryChange}
          // stateChange={stateChange}
          isBtnDisable={isBtnDisable}
        />
      )}
    </>
  );
}
