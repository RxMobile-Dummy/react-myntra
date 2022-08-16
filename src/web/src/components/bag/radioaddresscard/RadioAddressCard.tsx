import React, { useState } from "react";
import "./RadioAddressCard.css";

interface Props {
  addresses: any;
  handleClick: any;
  showButton: boolean;
}

const RadioAddressCard = (props: Props) => {
  const { addresses, handleClick, showButton } = props;
  const {
    name,
    address,
    locality,
    city,
    pinCode,
    state,
    mobile,
    isDefault,
    addressType,
  } = addresses;
  return (
    <div className="mt-5 rac-container">
      <p className="font-weight-normal">
        {isDefault ? "DEFAULT ADDRESS" : "OTHER ADDRESSES"}
      </p>
      <div
        className="mt-2 bg-white rac-main-card form-check"
        onClick={handleClick}
      >
        <div className="rac-card-con p-3 mb-3">
          <div className="rac-left-column">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked={showButton}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <div className="rac-first-col">
                <span className="rac-title">{name}</span>
                <div className="rac-information mt-2">
                  <span>{address}</span>
                  <span>{locality}</span>
                  <span>{`${city} - ${pinCode}`}</span>
                  <span>{state}</span>
                  <span className="mt-3">{`Mobile: ${mobile}`}</span>
                </div>
              </div>
            </label>
          </div>
          <div className="rac-second-col">
            <span className="rac-title">{addressType}</span>
          </div>
        </div>

        {showButton && (
          <div className="border-top rac-footer">
            <span
              className=""
              data-bs-toggle="modal"
              data-bs-target="#editAddressDialog"
            >
              EDIT
            </span>
            <span data-bs-toggle="modal" data-bs-target="#removeAddressDialog">
              REMOVE
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioAddressCard;
