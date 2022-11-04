import React, { useState } from "react";
import "./Orders.css";
import "../../components/editprofile/EditProfile.css";
import { Link } from "react-router-dom";
import { getUserData } from "../../utils/Storage";
import Button from "../../components/button/Button";
import MenuText from "../../components/text/MenuText";
import { images } from "../../assets/images/index";
import { FaFilter, FaSearch } from "react-icons/fa";
import { OrdersDummy } from "../../constants/OrdersDummy";
import  OrderData  from "./OrderData";

function Orders() {
  const [isOrdersAvailable, setOrdersAvailable] = useState(true);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const [text, setText] = useState("");

  const editHandler = (index: any) => {
    console.log("onPressEdit", index);
  };

  return (
    <div
      className="order-container"
      data-bs-spy="scroll"
      data-bs-target=".order-list "
    >
      <div className="card-header">
        <div className="card-heading">
          <h6 style={{ fontWeight: 900, fontSize: "18px" }}>All orders</h6>
          <p style={{ fontWeight: 100, fontSize: "15px" }}>for anytime</p>
        </div>
        <div className="order-search">
          <div className="input-group">
            <div className="input-group-prepend">
              <FaSearch
                aria-hidden="true"
                className="text-muted"
                style={{ marginRight: "10px", color: "rgb(209, 209, 209)" }}
              />
              <input
                className="input-group"
                type="search"
                placeholder=" Search in orders"
                style={{ height: "20px", fontWeight: "100" }}
              />
            </div>
          </div>
          <button className="filter-button">
            <FaFilter
              aria-hidden="true"
              style={{ fontSize: "11px", marginRight: "8px" }}
            />{" "}
            Filter
          </button>
        </div>
      </div>

      <div className="order-list ">
        <ul className="list" role="tablist">
          {OrdersDummy.map((card: any, index: any) => {
            return <OrderData data={card} key={index} index={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Orders;
