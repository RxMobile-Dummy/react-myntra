import React from "react";
import { images } from "../../assets/images";
import { CartFooter, ContactUs, PaymentImg } from "./CartFoot.element";
const CartFoot = () => {
  return (
    <CartFooter>
      <PaymentImg src={images.AllPaymentImg} />
      <ContactUs>Need Help? Contact Us</ContactUs>
    </CartFooter>
  );
};

export default CartFoot;
