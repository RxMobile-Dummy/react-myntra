import React from "react";
import Select from 'react-select';


interface Props {
  customer: any;
  errors: any;
  handleChange: any;
  handleBlur: any;
  register?: any;
  countryChange?: any;
  stateChange?: any;
  isBtnDisable: boolean;
  countryChangeHandler: any;
  countries: any;
  countryValue: any;
}

export default function RegisterForm(props: Props) {
  const {
    customer,
    errors,
    handleChange,
    handleBlur,
    register,
    isBtnDisable,
    countryChangeHandler,
    countries,
    countryValue
  } = props;
  // ********** DESTRUCTRING OF CUSTOMER **********
  const {
    name,
    email,
    contactNumber,
    dob,
    gender,
    password,
    confirmPassword,
    country,
  } = customer;

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: "red",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : '#ff3f6c',
    }),
  }

  return (
    <>
      <div className="register-gradient-container container-fluid">
        <div className="container py-3 pb-5 register-form-card-container">
          <div className="card register-form-card">
            <div className="card-header register-form-card-header">
              register
            </div>
            <div className="card-body p-5 bg-white">
              <form onSubmit={register}>
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="name"
                    >
                      Name
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.name}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="email"
                    >
                      E-mail
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.email}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="country"
                    >
                      Country
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <Select
                    styles={customStyles} options={countries} value={countryValue} onChange={countryChangeHandler} />

                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.country}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="contactNumber"
                    >
                      Mobile Number
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="text"
                      id="contactNumber"
                      name="contactNumber"
                      value={contactNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.contactNumber}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="dob"
                    >
                      Date of Birth
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="date"
                      id="dob"
                      name="dob"
                      value={dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.dob}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <div className="form-check form-check-inline mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        defaultChecked={gender === "male"}
                      />
                      <label className="form-check-label" htmlFor="">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        defaultChecked={gender === "female"}
                      />
                      <label className="form-check-label" htmlFor="">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.password}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.confirmPassword}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-5">
                  <div className="col-md-3"></div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="btn login-btn btn-block w-50 mx-auto text-uppercase"
                      type="submit"
                      value="register"
                      style={{ borderRadius: "5px" }}
                      disabled={isBtnDisable}
                    />
                  </div>
                </div>
                {/* ********** */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
