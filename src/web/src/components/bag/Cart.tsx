import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BookmarkBorderOutlined, DiscountOutlined } from "@mui/icons-material";
import { NotificationManager } from "react-notifications";

import {
  AddressDiv,
  AvailableofferDiv,
  AvaOffer,
  CartItems,
  CartItemsScroll,
  CartLeft,
  ChangeButton,
  Container,
  DeliverTo,
  FirstOffer,
  LogoTruck,
  NoConvi,
  NoConviDiv,
  TopLA,
  WishListItem,
  WishName,
} from "./Cart.element";
import CartNav from "./CartNav";
import CartFoot from "./CartFoot";
import CartRightS from "./CartRight";
import CartItemsDiv from "./CartItems";
import { images } from "../../assets/images";
import { BagDummy } from "../../constants/BagDummy";
import ChangeAddressDialog from "../dialog/ChangeAddressDialog";
import EditAddressDialog from "../dialog/EditAddressDialog";
import { AddressesDummy } from "../../constants/AddressesDummy";
import { useDispatch, useSelector } from "react-redux";
import {
  AddAddress,
  contactNumberValidation,
  EditAddress,
  fieldValidation,
  GetAddressList,
  nameValidation,
  pincodeValidation,
  RemoveAddress,
  ResetAddAddressState,
  ResetEditAddressState,
  ResetRemoveAddressState,
  RootState,
} from "core";
import { getToken, getUserId } from "../../utils/Storage";

const Cart = () => {
  const [isAddressAvailable, setIsAddressAvailable] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
      {/* <CartNav color="20bd99" /> */}
      <CartNav />
      <CartItems>
        <CartLeft>
          <AddressDiv>
            <DeliverTo>
              <span style={{ fontWeight: "200" }}> Deliver To: </span>
              {AddressesDummy[0].name}, {AddressesDummy[0].pinCode}
              <br />
              <span style={{ fontWeight: "200" }}>
                {AddressesDummy[0].address}, {AddressesDummy[0].city}
              </span>
            </DeliverTo>
            <ChangeButton
              data-bs-toggle="modal"
              data-bs-target="#changeAddressDialog"
            >
              CHANGE ADDRESS
            </ChangeButton>
          </AddressDiv>

          <AvailableofferDiv>
            <TopLA>
              <DiscountOutlined sx={{ width: "25px", height: "25px" }} />
              <AvaOffer>Available Offers</AvaOffer>
            </TopLA>
            <FirstOffer>
              10% Instant Discount on American Express Cards on a min spend of
              Rs 3,500. TCA
            </FirstOffer>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#ff3f6c",
                      marginLeft: "-500px",
                      fontSize: "12px",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#ff3f6c",
                    fontSize: "12px",
                    marginBottom: "none",
                  }}
                >
                  Show More
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  10% Instant Discount on Bank Of Baroda Credit cards on a min
                  spend of Rs 3,000.TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  10% Cashback upto Rs 100 on Paytm Postpaid transaction on a
                  min spend of Rs 1000 . TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  15% Cashback upto Rs 150 on Freecharge Paylater transaction.
                  TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  10% Cashback upto Rs 200 on Ola Money Postpaid or wallet
                  transaction on a min spend of Rs 1000 . TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min
                  spend of Rs 999.Use code MBK500 on Mobikwik. TCA{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AvailableofferDiv>
          <NoConviDiv>
            <LogoTruck src={images.TruckImage} />
            <NoConvi>
              Yay! <b>No Convenience Fee</b> on this order{" "}
            </NoConvi>
          </NoConviDiv>
          <CartItemsScroll>
            {BagDummy.map((item) => {
              return <CartItemsDiv key={item.id} {...item} />;
            })}
          </CartItemsScroll>
          <WishListItem>
            <BookmarkBorderOutlined sx={{ width: "25px" }} />
            <WishName>Add More From WishList</WishName>
          </WishListItem>
        </CartLeft>
        <CartRightS />
      </CartItems>
      <CartFoot />
      <ChangeAddressDialog />
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

export default Cart;
