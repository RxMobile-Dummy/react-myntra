import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BookmarkBorderOutlined, DiscountOutlined } from "@mui/icons-material";

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

const Cart = () => {
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
      <EditAddressDialog />
    </Container>
  );
};

export default Cart;
