import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Address from "../../components/bag/selectaddress/Address";
import { isUserSessions } from "../../utils/Storage";

const AddressPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isUserSessions()) {
      navigate("/login");
    }
  });
  return (
    <>
      <Address />
    </>
  );
};

export default AddressPage;
