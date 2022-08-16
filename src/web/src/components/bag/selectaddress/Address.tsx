import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    toast.success("Address Added SuccessFully");
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const addressClickHandler = (index) => {
    setSelectedIndex(index);
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
      <ToastContainer />
      <EditAddressDialog />
    </Container>
  );
};

export default Address;
