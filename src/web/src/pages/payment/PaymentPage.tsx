import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Payment from "../../components/payment/Payment";
import { isUserSessions } from "../../utils/Storage";
const PaymentPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isUserSessions()) {
      navigate("/login");
    }
  });

  return (
    <>
      <Payment />
    </>
  );
};

export default PaymentPage;
