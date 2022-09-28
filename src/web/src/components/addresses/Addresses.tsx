import {
  contactNumberValidation,
  fieldValidation,
  GetAddressList,
  nameValidation,
  pincodeValidation,
  RootState,
} from "core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../assets/images";
import { AddressesDummy } from "../../constants/AddressesDummy";
import EditAddressDialog from "../dialog/EditAddressDialog";
import RemoveAddressDialog from "../dialog/RemoveAddressDialog";
import AddressCard from "./addresscard/AddressCard";
import { NotificationManager } from "react-notifications";

import "./Addresses.css";
import { AddAddress } from "core";
import { getToken, getUserId } from "../../utils/Storage";

const Addresses = () => {
  const [isAddressAvailable, setIsAddressAvailable] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dialogTitle, setDialogTitle] = useState("ADD NEW ADDRESS");

  const dispatch = useDispatch();

  let { addressListData, addressListError } = useSelector(
    (state: RootState) => state.getAddressListReducer
  );

  let { data, error } = useSelector(
    (state: RootState) => state.addAddressReducer
  );

  console.log("data:::", data);
  console.log("error:::", error);
  console.log("addressListData:::", addressListData);
  console.log("addressListError:::", addressListError);

  useEffect(() => {
    if (!addressListData) {
      const reqData = {
        userId: getUserId() || "",
        authToken: getToken() || "",
      };
      dispatch<any>(GetAddressList(reqData));
    }
    if (addressListData && addressListData.length > 0) {
      setIsAddressAvailable(true);
    } else {
    }
  }, [addressListData]);

  useEffect(() => {
    if (data) {
      console.log("data:::us: ", data);
      const closeButton = document.getElementById(
        "cancel-button"
      ) as HTMLElement;
      closeButton.click();

      NotificationManager.success("Address added", "", 2000);
    } else if (error) {
      console.log("error:::us: ", error);
      NotificationManager.error(error, "", 2000);
    }
  }, [data, error]);

  const [address, setAddress] = useState({
    name: "",
    mobileNo: "",
    pinCode: "",
    country: "",
    state: "",
    city: "",
    billingAddress: "",
    shippingAddress: "",
    locality: "",
    type: "",
    isDefault: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    mobileNo: "",
    pinCode: "",
    country: "",
    state: "",
    city: "",
    billingAddress: "",
    shippingAddress: "",
    locality: "",
    type: "",
    isDefault: false,
  });

  const addressClickHandler = (index: any) => {
    setSelectedIndex(index);
  };

  const onEditClickHandler = (index: any) => {};

  const onRemoveClickHandler = (index: any) => {};

  const submitClickHandler = async (event: any) => {
    event.preventDefault();

    const reqData = {
      userId: getUserId() || "",
      authToken: getToken() || "",
      name: address.name,
      mobileNo: address.mobileNo,
      pinCode: address.pinCode,
      country: address.country,
      state: address.state,
      city: address.city,
      billingAddress: address.billingAddress,
      shippingAddress: address.shippingAddress,
      locality: address.locality,
      type: "Home",
      isDefault: false,
    };
    await dispatch<any>(AddAddress(reqData));
  };

  const onAddAddressClickHandler = () => {
    setDialogTitle("ADD NEW ADDRESS");
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const validate = {
    name: (name: string) => nameValidation("Name", name),
    mobileNo: (contactNumber: string) => contactNumberValidation(contactNumber),
    country: (country: any) => fieldValidation("Country", country),
    state: (state: string) => fieldValidation("State", state),
    locality: (locality: string) => fieldValidation("Locality", locality),
    city: (city: string) => fieldValidation("City", city),
    billingAddress: (billingAddress: string) =>
      fieldValidation("Address", billingAddress),
    pinCode: (pinCode: string) => pincodeValidation(pinCode),
    type: () => {},
  };

  // ********** HANDLE BLUR FUNCTION **********
  const handleBlur = async (event: any) => {
    const { name, value } = event.target;

    let error = validate[name](value);

    setErrors({ ...errors, [name]: error });
  };

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
          onClick={onAddAddressClickHandler}
        >
          <span>+ ADD NEW ADDRESS</span>
        </div>
        <EditAddressDialog
          address={address}
          dialogTitle={dialogTitle}
          handleChange={handleChange}
          handleBlur={handleBlur}
          submitClickHandler={submitClickHandler}
          errors={errors}
        />
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
      {addressListData &&
        addressListData.map((address: any, index: any) => {
          return (
            <AddressCard
              key={index}
              addresses={address}
              showButton={selectedIndex === index}
              handleClick={() => addressClickHandler(index)}
            />
          );
        })}
      <EditAddressDialog
        dialogTitle={dialogTitle}
        address={address}
        handleChange={handleChange}
        handleBlur={handleBlur}
        submitClickHandler={submitClickHandler}
        errors={errors}
      />
      {/* remove address dialog */}
      <RemoveAddressDialog />
    </div>
  );
};

export default Addresses;
