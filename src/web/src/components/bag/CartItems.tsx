import React, { useState } from "react";
import {
  AddBoxOutlined,
  Clear,
  CloseFullscreenOutlined,
  CloseOutlined,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import {
  Brand,
  CartItemDiv,
  CartItems,
  Filtercontainer,
  FilterPM,
  Imagediv,
  ItemIamge,
  ItemInfoDiv,
  Name,
  Oprice,
  PercentOff,
  Price,
  PriceDis,
  RButton,
  RemoveButtonDiv,
  SizeDiv,
} from "./Cart.element";
import { useNavigate } from "react-router-dom";
const CartItemsDiv = ({
  images,
  id,
  title,
  sizes,
  price,
  off_price,
  discount,
  brand,
}) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  // const increaseQ = (id, quantity) => {
  //   const newQty = quantity + 1;
  //   if (1 >= quantity) {
  //     return;
  //   }
  //   dispatch(increase(id, newQty));
  // };
  const increaseQ = () => {
    setCount(count + 1);
  };
  const decreaseQ = () => {
    setCount(count - 1);
  };

  return (
    <CartItemDiv>
      <Imagediv>
        <ItemIamge src={images.image1} />
      </Imagediv>
      <ItemInfoDiv>
        <Brand>{brand}</Brand>
        <Name>{title}</Name>
        <Filtercontainer>
          <SizeDiv>
            <h6>{`Size: ${sizes[1]}`}</h6>
          </SizeDiv>
          <FilterPM>
            <AddBoxOutlined
              onClick={() => increaseQ()}
              sx={{
                backgroundColor: "#fff",
                color: "black",
                marginRight: "5px",
              }}
            />
            <p style={{ textAlign: "center", marginTop: "10px" }}>{count}</p>
            <IndeterminateCheckBoxOutlined
              onClick={() => decreaseQ()}
              sx={{
                color: "black",
                backgroundColor: "#fff",
                marginLeft: "5px",
              }}
            />
          </FilterPM>
        </Filtercontainer>
        <PriceDis>
          <Price>
            ₹{Math.floor(Number(off_price) * ((100 - Number(discount)) / 100))}
          </Price>
          <Oprice>{`₹${off_price}`}</Oprice>
          <PercentOff>{`${discount}% OFF`}</PercentOff>
        </PriceDis>
      </ItemInfoDiv>
      <RemoveButtonDiv>
        <RButton onClick={() => {}}>
          <Clear sx={{ color: "black", width: "25px", height: "25px" }} />
        </RButton>
      </RemoveButtonDiv>
    </CartItemDiv>
  );
};

export default CartItemsDiv;
