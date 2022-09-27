import { confirmPasswordValidation, emailValidation, ForgotPassword, passwordValidation, RootState } from "core";
import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import ChangePassword from "../../components/forgotpassword/ChangePassword";
import EmailForm from "../../components/registerpage/EmailForm";

export default function ForgetPasswordPage(props) {
  const [email, setEmail] = useState("");
  const [isOtpAvailable, setIsOtpAvailable] = useState(false);

  const dispatch = useDispatch()

  let { data, error } = useSelector(
    (state: RootState) => state.forgotPasswordReducer
  );

  console.log("data:::", data);
  console.log("error:::", error);

  useEffect(() => {
    if(data){
    console.log("data:::us: ", data);
    setPasswords({
      otp: "",
      newPassword: "",
      confirmNewPassword: "",
    })
    setIsOtpAvailable(true)
    NotificationManager.success(data,"", 2000);
    }else if(error){
      console.log("error:::us: ", error);
      NotificationManager.error(error,"", 2000);
    }
  }, [data, error]);

  const [passwords, setPasswords] = useState({
    otp: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [errors, setErrors] = useState({
    otp: "",
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleEmailBlur = (event) => {
    let error = emailValidation(event.target.value);
    setErrors({ ...errors, email: error || "" });
  };

  const passwordsChange = (event) => {
    const { name, value } = event.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const passwordsBlur = (event) => {
    const { name, value } = event.target;

    let error = validate[name](value);
    setErrors({ ...errors, [name]: error });
  };

  // ********** FORM VALIDATION FUNCTION **********
  const validateForm = () => {
    let valid = true;
    let error = null;
    let tempErrors = errors;

    for (const item in passwords) {
      error = validate[item](passwords[item]);

      if (error) {
        valid = false;
      }

      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors({ ...tempErrors });

    return valid;
  };

  const submitChangePassword = async (event) => {
    event.preventDefault();
  };

  // ********** VALIDATE OBJECT **********
  const validate = {
    newPassword: (password) => passwordValidation(password),
    confirmNewPassword: (password) =>
      confirmPasswordValidation(newPassword, password),
  };

  const submitEmail = async (event: any) => {

    event.preventDefault();
    let error = emailValidation(email);
    if (!error) {

    if(!error){
      const reqData = {
        email: email,
      }
      const res = await dispatch<any>(ForgotPassword(reqData))
      console.log("dispatch response: " + res)
    } else {
      setErrors({ ...errors, email: error });
    }
  };
  }

  const { otp, newPassword, confirmNewPassword } = passwords;

  if (!isOtpAvailable) {
    return (
      <>
        <EmailForm
          email={email}
          handleChange={handleEmailChange}
          handleBlur={handleEmailBlur}
          errors={errors}
          submitEmail={submitEmail}
        />
      </>
    )
  }
  return (
    <>
      <ChangePassword
        newPassword={newPassword}
        confirmNewPassword={confirmNewPassword}
        passwordsChange={passwordsChange}
        passwordsBlur={passwordsBlur}
        changePassword={submitChangePassword}
        errors={errors}
        email={email}
        otp={otp}
        resendEmail={submitEmail}
      />
    </>
  );
}
