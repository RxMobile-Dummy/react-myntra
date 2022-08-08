import React from "react";
import { Link } from "react-router-dom";
import "./CardUI.css";

interface Props {
  cardData: any;
}

const CardsUi = (props: Props) => {
  const { name, bankName, card, cardType, cardNumber, validity } =
    props.cardData;
  return (
    <div className="cc-container mt-5">
      <div className="mt-2 bg-white main-card" onClick={() => {}}>
        <div className="cc-card-con p-3 mb-3">
          <div className="cc-first-col">
            <span className="cc-bankname">{bankName}</span>
            <div className="cc-information mt-3">
              <span className="cc-title">{"CARD NUMBER"}</span>
              <span className="cc-data">{cardNumber}</span>
              <div className="cc-card-con">
                <div className="d-flex flex-column ">
                  <span className="cc-title mt-3">{"NAME ON CARD"}</span>
                  <span className="cc-data">{name}</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="cc-title mt-3">{"Validity"}</span>
                  <span className="cc-data">{validity}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cc-second-col">
            <label className="cc-card">{card}</label>
            <label className="cc-title">{cardType}</label>
          </div>
        </div>
        <div className="border-top cc-footer">
          <span
            className=""
            data-bs-toggle="modal"
            data-bs-target="#editAddressDialog"
          >
            <Link to="addcard/12312">EDIT</Link>
          </span>
          <span data-bs-toggle="modal" data-bs-target="#removeCardDialog">
            REMOVE
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardsUi;
