import { LocalOfferOutlined } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AllPriceDiv,
  AppCou,
  ApplyButton,
  ApplyCoupondiv,
  CartRight,
  CoupDis,
  CoupDisDiv,
  CoupDisrs,
  CouponApplyDiv,
  CoviFee,
  CoviFeediv,
  CoviFeeKM,
  CoviFeers,
  Dmrp,
  DmrpDiv,
  Dmrprs,
  NameC,
  PlaceorderButton,
  PlaceorderDiv,
  PriceDetailsT,
  Tmrp,
  TmrpDiv,
  Tmrprs,
  TotalAmount,
  TotalAmountdiv,
  TotalAmountrs,
  TotalPriceDiv,
} from "./CartRight.element";
import { Link } from "react-router-dom";
const CartRightS = () => {
  const navigate = useNavigate();

  let totalAmount = 0;
  // console.log(totalAmount);

  let totalMRP = 0;

  let totalDiscount = totalMRP - totalAmount;

  const placeOrder = () => {
    navigate("/select-address");
  };
  return (
    <CartRight>
      <CouponApplyDiv>
        <NameC>Coupons</NameC>
        <ApplyCoupondiv>
          <LocalOfferOutlined sx={{ width: "25px", height: "25px" }} />
          <AppCou>Apply Coupons</AppCou>
          <ApplyButton>APPLY</ApplyButton>
        </ApplyCoupondiv>
      </CouponApplyDiv>
      <AllPriceDiv>
        <PriceDetailsT>PRICE DETAILS ({"0"} Items)</PriceDetailsT>
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
          <PlaceorderButton onClick={placeOrder}>PLACE ORDER</PlaceorderButton>
        </PlaceorderDiv>
      </TotalPriceDiv>
    </CartRight>
  );
};

export default CartRightS;
