import React, { useState } from "react";
import "./WishListItem.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  item: any;
  deleteWishlistItem?: any;
  addToBag?: any;
  sizeError: any;
}
export default function WishlistItem(props: Props) {
  const { wishlistItemId, imgurls, brand, productName, sizes, price, offer } =
    props.item;

  const [selectedSize, setSelectedSize] = useState("");
  return (
    <li className="cards_item mt-3" style={{ width: "17rem" }}>
      <div className="card">
        <img
          src={imgurls}
          className="card-img-top"
          alt="..."
          height={"280px"}
        />
        <div className="p-1">
          <div className="card-body">
            <span className="wl-title">
              HIGHLANDER Men Navy Blue & White Slim Fit Striped Casual Shirt
            </span>
            <label className="wl-info my-3">
              <span>Rs.727 </span>
              <span>Rs.1,399 </span>
              <span>(48% OFF)</span>
            </label>
          </div>
        </div>
        <AiOutlineCloseCircle
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            color: "gray",
            fontSize: "1.5em",
            cursor: "pointer",
          }}
        />
        <button className="move-bag-btn">MOVE TO BAG</button>
      </div>
    </li>
  );
}
