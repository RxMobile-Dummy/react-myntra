import {
  contactNumberValidation,
  fieldValidation,
  GetAddressList,
  nameValidation,
  pincodeValidation,
  RootState,
  AddAddress,
  RemoveAddress,
  EditAddress,
  ResetAddAddressState,
  ResetEditAddressState,
  ResetRemoveAddressState,
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
import { getToken, getUserId } from "../../utils/Storage";

const Addresses = () => {
  const [isAddressAvailable, setIsAddressAvailable] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dialogTitle, setDialogTitle] = useState("ADD NEW ADDRESS");
  const [isEdit, setEditable] = useState(false);
  const [isDefault, setIsDefault] = useState(false);
  const dispatch = useDispatch();

  let { addressListData, addressListError } = useSelector(
    (state: RootState) => state.getAddressListReducer
  );

  let { removeAdddata, removeAddError } = useSelector(
    (state: RootState) => state.removeAddressReducer
  );

  let { data, error } = useSelector(
    (state: RootState) => state.addAddressReducer
  );

  let { editAdddata, editAdderror } = useSelector(
    (state: RootState) => state.editAddressReducer
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
      setIsAddressAvailable(false);
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
      const reqData = {
        userId: getUserId() || "",
        authToken: getToken() || "",
      };
      dispatch<any>(GetAddressList(reqData));
      dispatch<any>(ResetAddAddressState());
    } else if (error) {
      console.log("error:::us: ", error);
      NotificationManager.error(error, "", 2000);
      dispatch<any>(ResetAddAddressState());
    }
  }, [data, error]);

  useEffect(() => {
    if (editAdddata) {
      console.log("editAdddata:::us: ", editAdddata);
      const closeButton = document.getElementById(
        "cancel-button"
      ) as HTMLElement;
      closeButton.click();

      NotificationManager.success("Address updated", "", 2000);
      const reqData = {
        userId: getUserId() || "",
        authToken: getToken() || "",
      };
      dispatch<any>(ResetEditAddressState());
      dispatch<any>(GetAddressList(reqData));
    } else if (editAdderror) {
      console.log("editAdderror:::us: ", editAdderror);
      NotificationManager.error(editAdderror, "", 2000);
      dispatch<any>(ResetEditAddressState());
    }
  }, [editAdddata, editAdderror]);

  useEffect(() => {
    if (removeAdddata) {
      console.log("removeAdddata:::us: ", removeAdddata);
      const closeButton = document.getElementById(
        "remove-cancel-btn"
      ) as HTMLElement;
      closeButton.click();

      NotificationManager.success("Address removed", "", 2000);
      dispatch<any>(ResetRemoveAddressState());
      const reqData = {
        userId: getUserId() || "",
        authToken: getToken() || "",
      };
      dispatch<any>(GetAddressList(reqData));
    } else if (removeAddError) {
      console.log("error:::us: ", removeAddError);
      NotificationManager.error(removeAddError, "", 2000);
      dispatch<any>(ResetRemoveAddressState());
    }
  }, [removeAdddata, removeAddError]);

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
    type: "Home",
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

  const onCancelClickHandler = (event: any) => {
    event.preventDefault();
    setEditable(false);
    setAddress({
      name: "",
      mobileNo: "",
      pinCode: "",
      country: "",
      state: "",
      city: "",
      billingAddress: "",
      shippingAddress: "",
      locality: "",
      type: "Home",
      isDefault: false,
    });
  };

  const onEditClickHandler = (event: any) => {
    event.preventDefault();
    setDialogTitle("EDIT ADDRESS");
    setEditable(true);
    setAddress(addressListData[selectedIndex]);
  };

  const onRemoveClickHandler = (event: any) => {
    const id = addressListData[selectedIndex]._id;
    console.log("addressId :: ", id);
    event.preventDefault();
    const reqData = {
      userId: getUserId() || "",
      authToken: getToken() || "",
      addressId: id,
    };
    dispatch<any>(RemoveAddress(reqData));
  };

  const submitClickHandler = async (event: any) => {
    event.preventDefault();
    if (!isEdit) {
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
        type: address.type,
        isDefault: address.isDefault,
      };
      await dispatch<any>(AddAddress(reqData));
    } else {
      const id = addressListData[selectedIndex]._id;

      const reqData = {
        userId: getUserId() || "",
        authToken: getToken() || "",
        addressId: id,
        name: address.name,
        mobileNo: address.mobileNo,
        pinCode: address.pinCode,
        country: address.country,
        state: address.state,
        city: address.city,
        billingAddress: address.billingAddress,
        shippingAddress: address.shippingAddress,
        locality: address.locality,
        type: address.type,
        isDefault: address.isDefault,
      };
      await dispatch<any>(EditAddress(reqData));
    }
  };

  const onAddAddressClickHandler = () => {
    setDialogTitle("ADD NEW ADDRESS");
    setEditable(false);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log("name:: ", name);
    console.log("value:: ", value);
    if (name === "isDefault") {
      setAddress({ ...address, [name]: !address.isDefault });
    } else if (name === "addType1") {
      setAddress({ ...address, type: "Home" });
    } else if (name === "addType2") {
      setAddress({ ...address, type: "Office" });
    } else {
      setAddress({ ...address, [name]: value });
    }
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
          handleCancel={onCancelClickHandler}
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
          onClick={onAddAddressClickHandler}
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
              handleEditClick={onEditClickHandler}
            />
          );
        })}
      <EditAddressDialog
        dialogTitle={dialogTitle}
        address={address}
        handleChange={handleChange}
        handleBlur={handleBlur}
        submitClickHandler={submitClickHandler}
        handleCancel={onCancelClickHandler}
        errors={errors}
      />
      {/* remove address dialog */}
      <RemoveAddressDialog submitRemoveHandler={onRemoveClickHandler} />
    </div>
  );
};

export default Addresses;
