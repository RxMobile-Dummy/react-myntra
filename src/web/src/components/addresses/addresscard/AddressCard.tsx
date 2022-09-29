import React, { useState } from "react";
import "./AddressCard.css";

interface Props {
  addresses: any;
  handleClick: any;
  handleEditClick: any;
  showButton: boolean;
}

const AddressCard = (props: Props) => {
  const { addresses, handleClick, showButton, handleEditClick } = props;
  const {
    name,
    address,
    locality,
    city,
    pinCode,
    state,
    mobileNo,
    isDefault,
    type,
  } = addresses;
  return (
    <div className="ac-container mt-5">
      <p className="font-weight-normal">
        {isDefault ? "DEFAULT ADDRESS" : "OTHER ADDRESSES"}
      </p>
      <div className="mt-2 bg-white main-card" onClick={handleClick}>
        <div className="ac-card-con p-3 mb-3">
          <div className="ac-first-col">
            <span className="ac-title">{name}</span>
            <div className="ac-information mt-2">
              <span>{address}</span>
              <span>{locality}</span>
              <span>{`${city} - ${pinCode}`}</span>
              <span>{state}</span>
              <span className="mt-3">{`Mobile: ${mobileNo}`}</span>
            </div>
          </div>
          <div className="ac-second-col">
            <span className="ac-title">{type}</span>
          </div>
        </div>
        {showButton && (
          <div className="border-top ac-footer">
            <span
              className=""
              data-bs-toggle="modal"
              data-bs-target="#editAddressDialog"
              onClick={handleEditClick}
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

export default AddressCard;
