import React, { useEffect, useState } from "react";
import "./Address.css";
import {
  AddAddressButton,
  AddressCheckoutAdd,
  Addressdiv,
  AddressFormDiv,
  ButtonDiv,
  CityInput,
  ContactDetailsdiv,
  ContactInput,
  Container,
  DotsCheckoutAdd,
  FormDiv,
  FormLeftdiv,
  FormRightDiv,
  FullAddInput,
  Headings,
  NameInput,
  PinCodeInput,
  PlaceorderButton,
  PlaceorderDiv,
  SaveAddressdiv,
  SaveHome,
  SaveWork,
  StateInput,
  TownInput,
} from "./Address.element";
import {
  BagCheckout,
  DotsCheckout,
  Logo,
  NavCheckOutSteps,
  NavContainer,
  NavLogo,
  NavSecure,
  PaymentCheckout,
  SecureLogo,
  SecureN,
} from "../CartNav.element";
import {
  AllPriceDiv,
  CoupDis,
  CoupDisDiv,
  CoupDisrs,
  CoviFee,
  CoviFeediv,
  CoviFeeKM,
  CoviFeers,
  Dmrp,
  DmrpDiv,
  Dmrprs,
  PriceDetailsT,
  Tmrp,
  TmrpDiv,
  Tmrprs,
  TotalAmount,
  TotalAmountdiv,
  TotalAmountrs,
  TotalPriceDiv,
} from "../CartRight.element";
import { useNavigate } from "react-router-dom";
import CartFoot from "../CartFoot";
import { images } from "../../../assets/images";
import { AddressesDummy } from "../../../constants/AddressesDummy";
import RadioAddressCard from "../radioaddresscard/RadioAddressCard";
import EditAddressDialog from "../../dialog/EditAddressDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  AddAddress,
  contactNumberValidation,
  EditAddress,
  fieldValidation,
  GetAddressList,
  nameValidation,
  pincodeValidation,
  ResetAddAddressState,
  ResetEditAddressState,
  ResetRemoveAddressState,
  RootState,
} from "core";
import { getToken, getUserId } from "../../../utils/Storage";
import { NotificationManager } from "react-notifications";

const Address = () => {
  const navigate = useNavigate();
  // const bagData = useSelector((state) => state.bag.bagData);
  const bagData = [];

  let totalAmount = 0;
  // bagData?.map(
  //   (e) =>
  //     (totalAmount += Math.floor(
  //       Number(e.off_price) * ((100 - Number(e.discount)) / 100)
  //     ))
  // );

  let totalMRP = 0;
  // bagData?.map((e) => (totalMRP += Math.floor(Number(e.off_price))));

  let totalDiscount = totalMRP - totalAmount;
  const goToPayment = () => {
    navigate("/payment");
  };
  const addAddress = (e: any) => {
    e.preventDefault();
    // toast.success("Address Added SuccessFully");
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const addressClickHandler = (index) => {
    setSelectedIndex(index);
  };

  const [isAddressAvailable, setIsAddressAvailable] = useState(true);
  const [dialogTitle, setDialogTitle] = useState("ADD NEW ADDRESS");
  const [isEdit, setEditable] = useState(false);

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
      type: "",
      isDefault: false,
    });
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
        type: "Home",
        isDefault: false,
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
        type: "Home",
        isDefault: false,
      };
      await dispatch<any>(EditAddress(reqData));
    }
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

  return (
    <Container>
      <NavContainer>
        <NavLogo>
          {/* <Logo src={images.MyntraLogo} onClick={() => navigate("/")} /> */}
        </NavLogo>
        <NavCheckOutSteps>
          <BagCheckout>BAG</BagCheckout>
          <DotsCheckoutAdd>---------</DotsCheckoutAdd>
          <AddressCheckoutAdd>ADDRESS</AddressCheckoutAdd>
          <DotsCheckout>---------</DotsCheckout>
          <PaymentCheckout>PAYMENT</PaymentCheckout>
        </NavCheckOutSteps>
        <NavSecure>
          <SecureLogo src={images.SecureImg} />
          <SecureN>100% SECURE</SecureN>
        </NavSecure>
      </NavContainer>
      <AddressFormDiv>
        <div className="left-container mt-5">
          <div className="left-header-div">
            <h6 className="fw-bolder">Select Delivery Address</h6>
            <button
              className="btn-add-address"
              data-bs-toggle="modal"
              data-bs-target="#editAddressDialog"
            >
              ADD NEW ADDRESS
            </button>
          </div>
          <div className="left-address-div">
            {AddressesDummy.map((addressData, index) => {
              return (
                <RadioAddressCard
                  key={index}
                  addresses={addressData}
                  showButton={selectedIndex === index}
                  handleClick={() => addressClickHandler(index)}
                />
              );
            })}
          </div>
          <div
            className="rac-add-address-btn my-3"
            data-bs-toggle="modal"
            data-bs-target="#editAddressDialog"
          >
            + Add New Address
          </div>
          {/* <FormDiv>
            <ContactDetailsdiv>
              <Headings>Contact Details</Headings>

              <NameInput placeholder="Enter Your Name" />
              <ContactInput placeholder="Enter Your Mobile No." />
            </ContactDetailsdiv>
            <Addressdiv>
              <Headings>Address</Headings>
              <PinCodeInput placeholder="Enter Pin Code" />
              <FullAddInput placeholder="Enter Full Address" />
              <TownInput placeholder="Enter Locality/Town" />
              <CityInput placeholder="Enter City/District" />
              <StateInput placeholder="Enter State" />
            </Addressdiv>
            <SaveAddressdiv>
              <Headings>Save Address as:</Headings>
              <SaveHome>Home</SaveHome>
              <SaveWork>Work</SaveWork>
            </SaveAddressdiv>
            <ButtonDiv>
              <AddAddressButton onClick={addAddress}>
                ADD ADDRESS
              </AddAddressButton>
            </ButtonDiv>
          </FormDiv> */}
        </div>
        <FormRightDiv>
          <AllPriceDiv>
            <PriceDetailsT>
              PRICE DETAILS ({bagData?.length} Items)
            </PriceDetailsT>
            <TmrpDiv>
              <Tmrp>TOTAL MRP</Tmrp>
              <Tmrprs>₹{totalMRP}</Tmrprs>
            </TmrpDiv>
            <DmrpDiv>
              <Dmrp>Discount on MRP</Dmrp>
              <Dmrprs>-₹{totalDiscount}</Dmrprs>
            </DmrpDiv>
            <CoupDisDiv>
              <CoupDis>Coupon Discount</CoupDis>
              <CoupDisrs>Apply Coupon</CoupDisrs>
            </CoupDisDiv>
            <CoviFeediv>
              <CoviFee>Convenience Fee</CoviFee>
              <CoviFeeKM>Know More</CoviFeeKM>
              <CoviFeers>FREE</CoviFeers>
            </CoviFeediv>
          </AllPriceDiv>
          <TotalPriceDiv>
            <TotalAmountdiv>
              <TotalAmount>Total Amount</TotalAmount>
              <TotalAmountrs>₹{totalAmount}</TotalAmountrs>
            </TotalAmountdiv>
            <PlaceorderDiv>
              <PlaceorderButton onClick={goToPayment}>
                PLACE ORDER
              </PlaceorderButton>
            </PlaceorderDiv>
          </TotalPriceDiv>
        </FormRightDiv>
      </AddressFormDiv>
      <CartFoot />
      <EditAddressDialog
        dialogTitle={dialogTitle}
        address={address}
        handleChange={handleChange}
        handleBlur={handleBlur}
        submitClickHandler={submitClickHandler}
        handleCancel={onCancelClickHandler}
        errors={errors}
      />
    </Container>
  );
};

export default Address;
