import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../../components/bag/Cart";
import { isUserSessions } from "../../utils/Storage";
import "./BagPage.css";
const BagPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isUserSessions()) {
      navigate("/login");
    }
  });

  return (
    <>
      <Cart />
    </>
  );
};

export default BagPage;
