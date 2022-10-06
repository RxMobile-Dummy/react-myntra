import {
  GetCardInfoList,
  RootState,
  RemoveCardInfo,
  ResetRemoveCardInfoState,
} from "core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { CardsDummy } from "../../constants/CardsDummy";
import { getToken, getUserId } from "../../utils/Storage";
import RemoveCardDialog from "../dialog/RemoveCardDialog";
import CardsUi from "./cardui/CardsUi";
import "./SavedCards.css";
import { NotificationManager } from "react-notifications";

const SavedCards = () => {
  let navigate = useNavigate();

  const [isCardAvailable, setSetCardAvailable] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();

  let { getCardListData, getCardListError } = useSelector(
    (state: RootState) => state.getCardInfoListReducer
  );

  let { removeCarddata, removeCardError } = useSelector(
    (state: RootState) => state.removeCardInfoReducer
  );
  console.log("getCardListData:::", getCardListData);
  console.log("getCardListError:::", getCardListError);

  useEffect(() => {
    if (!getCardListData) {
      const reqData = {
        userId: getUserId() || "",
        authToken: getToken() || "",
      };
      dispatch<any>(GetCardInfoList(reqData));
    }
    if (getCardListData && getCardListData.length > 0) {
      setSetCardAvailable(true);
    } else {
      setSetCardAvailable(false);
    }
  }, [getCardListData]);

  useEffect(() => {
    if (removeCarddata) {
      console.log("removeCarddata:::us: ", removeCarddata);
      const closeButton = document.getElementById(
        "remove-cancel-btn"
      ) as HTMLElement;
      closeButton.click();

      NotificationManager.success("Card removed", "", 2000);
      const reqData = {
        userId: getUserId() || "",
        authToken: getToken() || "",
      };
      dispatch<any>(ResetRemoveCardInfoState());
      dispatch<any>(GetCardInfoList(reqData));
    } else if (removeCardError) {
      console.log("error:::us: ", removeCardError);
      NotificationManager.error(removeCardError, "", 2000);
      dispatch<any>(ResetRemoveCardInfoState());
    }
  }, [removeCarddata, removeCardError]);

  const onRemoveClickHandler = (event: any) => {
    event.preventDefault();
    const id = getCardListData[selectedIndex]._id;
    console.log("addressId :: ", id);
    const reqData = {
      userId: getUserId() || "",
      authToken: getToken() || "",
      cardInfoId: id,
    };
    dispatch<any>(RemoveCardInfo(reqData));
  };

  const onRemoveClick = (event: any, index: number) => {
    setSelectedIndex(index);
  };

  const onEditClick = (event: any, index: number) => {
    const id = getCardListData[index]._id;

    navigate(`addcard/${id}`, { state: getCardListData[index] });
  };

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
        <div className="border add-address px-3 py-2">
          <Link to="addcard/0">
            <span>ADD CARD</span>
          </Link>
        </div>
      </div>
      {getCardListData &&
        getCardListData.map((card: any, index: number) => {
          return (
            <CardsUi
              key={index}
              index={index}
              cardData={card}
              onRemoveClick={onRemoveClick}
              onEditClick={onEditClick}
            />
          );
        })}
      <RemoveCardDialog submitRemoveHandler={onRemoveClickHandler} />
    </div>
  );
};

export default SavedCards;
