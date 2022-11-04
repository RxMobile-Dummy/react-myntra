import React from "react";
import "./Orders.css";
import { images } from "../../assets/images";

const OrderData = ({ data, index }) => {
  const {
    iconName,
    orderStatus,
    onDate,
    productImage,
    brandName,
    productName,
    size,
    closedOnDate,
  } = data;

  return (
    <>
      <div className="order-detail-box">
        <div className="sec1">
          <div className="delivered-icon">
            <img src={iconName} alt="" className="icon" />
          </div>
          <div className="delivery-status">
            <h6 style={{ color: "var(--focusGreen)" }}>{orderStatus}</h6>
            <p>{onDate}</p>
          </div>
        </div>
        <div className="sec2">
          <div className="sub-sec2" style={{ height: "15vh" }}>
            <div className="prdc-image">
              <img src={productImage} alt="" style={{ width: "100%" }} />
            </div>
            <div className="prdc-detail">
              <h6>{brandName}</h6>
              <p>{productName}</p>
              <p>Size : {size}</p>
            </div>
          </div>
          <div className="sub-sec2" style={{ height: "6vh" }}>
            <ul>
              <li style={{ fontWeight: 100 }}>
                Exchange/Return window closed on {closedOnDate}
              </li>
            </ul>
          </div>
          <div className="sub-sec2">
            <div className="rating">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
            <div className="edit-review">Edit Review</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderData;
