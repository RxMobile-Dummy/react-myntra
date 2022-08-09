import React from "react";
import {
  AddressCheckout,
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
} from "./CartNav.element";

import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";

const CartNav = () => {
  const navigate = useNavigate();
  return (
    <NavContainer>
      <NavLogo>
        {/* <Logo src={images.MyntraLogo} onClick={() => navigate("/")} /> */}
      </NavLogo>
      <NavCheckOutSteps>
        <BagCheckout>BAG</BagCheckout>
        <DotsCheckout>---------</DotsCheckout>
        <AddressCheckout>ADDRESS</AddressCheckout>
        <DotsCheckout>---------</DotsCheckout>
        <PaymentCheckout>PAYMENT</PaymentCheckout>
      </NavCheckOutSteps>
      <NavSecure>
        <SecureLogo src={images.SecureImg} />
        <SecureN>100% SECURE</SecureN>
      </NavSecure>
    </NavContainer>
  );
};

export default CartNav;
