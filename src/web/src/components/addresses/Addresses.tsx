import React, { useState } from "react";
import { images } from "../../assets/images";
import { AddressesDummy } from "../../constants/AddressesDummy";
import EditAddressDialog from "../dialog/EditAddressDialog";
import RemoveAddressDialog from "../dialog/RemoveAddressDialog";
import AddressCard from "./addresscard/AddressCard";
import "./Addresses.css";

const Addresses = () => {
  const [isAddressAvailable, setIsAddressAvailable] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const addressClickHandler = (index) => {
    setSelectedIndex(index);
  };

  const onEditClickHandler = (index) => {};

  const onRemoveClickHandler = (index) => {};

  if (!isAddressAvailable) {
    return (
      <div className="no-address-container">
        <img style={{ height: "180px" }} src={images.AddressImage} alt="" />
        <p>SAVE YOUR ADDRESSES NOW</p>
        <p>Add your home and office addresses and enjoy faster checkout</p>
        <div
          className="border add-address px-3 py-2 mt-4"
          data-bs-toggle="modal"
          data-bs-target="#editAddressDialog"
        >
          <span>+ ADD NEW ADDRESS</span>
        </div>
        <EditAddressDialog />
      </div>
    );
  }
  return (
    <div className="address-container mx-4">
      <div className="first-container mt-3 px-3">
        <p>Saved Addresses</p>
        <div
          className="border add-address px-3 py-2"
          data-bs-toggle="modal"
          data-bs-target="#editAddressDialog"
        >
          <span>+ ADD NEW ADDRESS</span>
        </div>
      </div>
      {AddressesDummy.map((address, index) => {
        return (
          <AddressCard
            key={index}
            addresses={address}
            showButton={selectedIndex === index}
            handleClick={() => addressClickHandler(index)}
          />
        );
      })}
      {/* change password dialog */}
      <EditAddressDialog />
      {/* remove address dialog */}
      <RemoveAddressDialog />
    </div>
  );
};

export default Addresses;
