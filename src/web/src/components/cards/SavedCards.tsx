import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images";
import { CardsDummy } from "../../constants/CardsDummy";
import RemoveCardDialog from "../dialog/RemoveCardDialog";
import CardsUi from "./cardui/CardsUi";
import "./SavedCards.css";

const SavedCards = () => {
  const [isCardAvailable, setSetCardAvailable] = useState(true);
  if (!isCardAvailable) {
    return (
      <div className="no-address-container">
        <img style={{ height: "180px" }} src={images.CardImage} alt="" />
        <p>SAVE YOUR CREDIT/ DEBIT CARDS</p>
        <p>
          It's convenient to pay with saved cards. <br />
          Your card information will be secure, we use 128-bit encryption
        </p>
        <Link to="addcard/0">
          <div className="border add-address px-3 py-2 mt-4">
            <span>ADD CARD</span>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="address-container mx-4">
      <div className="first-container mt-3 px-3">
        <p className="mt-2">Saved Cards</p>
        <div
          className="border add-address px-3 py-2"
          data-bs-toggle="modal"
          data-bs-target="#editAddressDialog"
        >
          <Link to="addcard/0">
            <span>ADD CARD</span>
          </Link>
        </div>
      </div>
      {CardsDummy.map((card, index) => {
        return (
          <CardsUi
            key={index}
            cardData={card}
            // handleClick={() => addressClickHandler(index)}
          />
        );
      })}
      <RemoveCardDialog />
    </div>
  );
};

export default SavedCards;
