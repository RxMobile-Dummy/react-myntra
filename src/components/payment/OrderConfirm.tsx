import React from "react";
import {
  AddressCheckoutO,
  ButtonDiv,
  Container,
  ContiShop,
  DotsCheckoutO,
  OrderC,
  OrderCBS,
  OrderCM,
  OrderConfirmdiv,
  PaymentCheckoutO,
  ViewOrder,
} from "./OrderConfirm.element";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate, Link } from "react-router-dom";
import {
  BagCheckout,
  Logo,
  NavCheckOutSteps,
  NavContainer,
  NavLogo,
  NavSecure,
  SecureLogo,
  SecureN,
} from "../bag/CartNav.element";
import { images } from "../../assets/images";
import CartFoot from "../bag/CartFoot";
const OrderConfirm = () => {
  const navigate = useNavigate();

  const contiShop = () => {
    navigate("/");
  };
  return (
    <Container>
      <NavContainer>
        <NavLogo>
          {/* <Logo src={images.MyntraLogo} onClick={() => navigate("/")} /> */}
        </NavLogo>
        <NavCheckOutSteps>
          <BagCheckout>BAG</BagCheckout>
          <DotsCheckoutO>---------</DotsCheckoutO>
          <AddressCheckoutO>ADDRESS</AddressCheckoutO>
          <DotsCheckoutO>---------</DotsCheckoutO>
          <PaymentCheckoutO>PAYMENT</PaymentCheckoutO>
        </NavCheckOutSteps>
        <NavSecure>
          <SecureLogo src={images.SecureImg} />
          <SecureN>100% SECURE</SecureN>
        </NavSecure>
      </NavContainer>
      <OrderConfirmdiv>
        <OrderCBS>
          <CheckCircleOutlineIcon
            sx={{ width: "55px", height: "55px", color: "#ff3f6c" }}
          />
          <OrderC>Order Confirmed</OrderC>
          <OrderCM>
            Your order is confirmed. You will receive an order confirmation
            email/SMS shortly with the expected delivery date for your items.
          </OrderCM>
          <ButtonDiv>
            <ContiShop onClick={contiShop}>CONTINUE SHOPPING</ContiShop>
          </ButtonDiv>
        </OrderCBS>
      </OrderConfirmdiv>
      <CartFoot />
    </Container>
  );
};

export default OrderConfirm;
