
export const nameValidation = (fieldName: string, fieldValue: string) => {
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

  export const emailValidation = (email: string) => {
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

  export const contactNumberValidation = (number: string) => {
    if (number.trim() === "") {
      return "Phone number is required";
    }
    if (/^[0-9]{10}$/.test(number)) {
      return null;
    }

    return "Phone number contains exactly 10 digits";
  };

  export const dobValidation = (dob: string) => {
    if (dob.trim() === "") {
      return "Date is required";
    }

    let age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 5) {
      return "Age should be greater than 5";
    }

    return null;
  };

  export const passwordValidation = (password: any) => {
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

  export const confirmPasswordValidation = (confirmPassword: any, password: any) => {
    if (confirmPassword.trim() === "") {
      return "Confirm Password is required";
    }

    if (password !== confirmPassword) {
      return "Password and Confirm password are not same";
    }
  };

  export const pincodeValidation = (pincode: any) => {
    if (pincode.trim() === "") {
      return `Pincode is required`;
    }

    if (!/\d{6}/.test(pincode.trim())) {
      return "Pincode must be length of 6 digits";
    }
  };

  export const selectionValidation = (fieldName: string, fieldValue: string) => {
    if (fieldValue === "select") {
      return `${fieldName} is required`;
    }
  };

  export const fieldValidation = (fieldName: string, input: any) => {
    if (input.trim() === "") {
      return `${fieldName} is required`;
    }
  };

  export const cardNumberValidation = (input: any) => {
    if (input.trim() === "") {
      return `Card number is required`;
    }else if (input.trim().length < 14){
      return `Card number is invalid`
    }
  };

  export const cardMonthValidation = (input: any) => {
    if (input.trim() === "") {
      return `Month is required`;
    }
    if (input.trim().length < 2 || input.trim() > 12 || input.trim() < 1) {
      return `Invalid Month`
    }
  };

  export const cardYearValidation = (input: any) => {
    if (input.trim() === "") {
      return `Year is required`;
    }else if (input.trim().length < 4) {
      return `Invalid Year`
    }
  };