import React, { useEffect, useState } from "react";
// import WishlistService from "../services/WishlistServie";
// import BagService from "../services/BagService";
// import { getUserId, getToken, removeUserSession } from "../utils/Storage";
import WishlistItem from "../../components/wishlist/WishlistItem";
import EmptyBanner from "../../components/wishlist/EmptyBanner";
import Loading from "../../components/Loading";
// import { NotificationManager } from "react-notifications";
import { images } from "../../assets/images";
import "./WishListPage.css";
import { useNavigate } from "react-router-dom";
import { isUserSessions } from "../../utils/Storage";

interface Props {
  props?: any;
}

export default function WishlistPage(props: Props) {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isUserSessions()) {
      navigate("/login");
    }
  });

  const [wishlistItems, setWishlistItems] = useState([
    {
      wishlistItemId: 1,
      imgurls: images.ShirtDummy,
      brand: "Puma",
      productName: "SHoes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      size: "XL",
      quantity: 1,
      price: 1020,
      offer: "25%",
    },
    {
      wishlistItemId: 1,
      imgurls: images.ShirtDummy,
      brand: "Puma",
      productName: "SHoes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      size: "XL",
      quantity: 1,
      price: 1020,
      offer: "25%",
    },
    {
      wishlistItemId: 1,
      imgurls: images.ShirtDummy,
      brand: "Puma",
      productName: "SHoes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      size: "XL",
      quantity: 1,
      price: 1020,
      offer: "25%",
    },
    {
      wishlistItemId: 1,
      imgurls: images.ShirtDummy,
      brand: "Puma",
      productName: "SHoes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      size: "XL",
      quantity: 1,
      price: 1020,
      offer: "25%",
    },
    {
      wishlistItemId: 1,
      imgurls: images.ShirtDummy,
      brand: "Puma",
      productName: "SHoes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      size: "XL",
      quantity: 1,
      price: 1020,
      offer: "25%",
    },
    {
      wishlistItemId: 1,
      imgurls: images.ShirtDummy,
      brand: "Puma",
      productName: "SHoes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      size: "XL",
      quantity: 1,
      price: 1020,
      offer: "25%",
    },
    {
      wishlistItemId: 1,
      imgurls: images.ShirtDummy,
      brand: "Puma",
      productName: "SHoes",
      sizes: ["S", "M", "L", "XL", "XXL"],
      size: "XL",
      quantity: 1,
      price: 1020,
      offer: "25%",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [sizeError, setSizeError] = useState({});

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (wishlistItems.length < 1) {
    return (
      <>
        <EmptyBanner title="wishlist is empty" />
      </>
    );
  }
  return (
    <>
      <div className="main">
        <div className="mt-5">{`My Wishlist ${wishlistItems.length} items`}</div>
        <div className="my-4" style={{ width: "fit-content" }}>
          <div className="wl-listdata">
            {wishlistItems.map((item, index) => {
              return (
                <WishlistItem
                  key={index}
                  item={item}
                  // deleteWishlistItem={deleteWishlistItem}
                  // addToBag={addToBag}
                  sizeError={sizeError}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
