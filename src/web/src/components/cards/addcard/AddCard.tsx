import React, { useEffect, useState } from "react";
import "./AddCard.css";
import BottomLineInput from "../../input/BottomLineInput";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  nameValidation,
  RootState,
  cardNumberValidation,
  cardMonthValidation,
  cardYearValidation,
  AddCardInfo,
  EditCardInfo,
  ResetEditCardInfoState,
  ResetAddCardInfoState,
} from "core";
import { NotificationManager } from "react-notifications";
import { getToken, getUserId } from "../../../utils/Storage";

interface CustomizedState {
  myState: string;
}

const AddCard = () => {
  let navigate = useNavigate();

  const [isEditcard, setEditCard] = useState(false);
  let { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    console.log(`/cards/${id}`);
    if (id === "0") {
      console.log(`card not edit`);
      setEditCard(false);
    } else {
      console.log(`card edit`);
      setEditCard(true);
      const data = state as any;
      delete data._id;
      delete data.paymentMethod;
      setCardInputs(data);
    }
  }, []);

  const dispatch = useDispatch();

  let { addCarddata, addCardError } = useSelector(
    (state: RootState) => state.addCardInfoReducer
  );

  let { editCardData, editCardError } = useSelector(
    (state: RootState) => state.editCardInfoReducer
  );

  console.log("data:::", addCarddata);
  console.log("error:::", addCardError);
  console.log("editCardData:::", editCardData);
  console.log("editCardError:::", editCardError);

  useEffect(() => {
    if (addCarddata) {
      console.log("data:::us: ", addCarddata);

      NotificationManager.success("Card added", "", 2000);
      dispatch<any>(ResetAddCardInfoState());
      navigate("/profile/cards");
      window.location.reload();
    } else if (addCardError) {
      console.log("addCardError:::us: ", addCardError);
      NotificationManager.error(addCardError, "", 2000);
      dispatch<any>(ResetAddCardInfoState());
    }
  }, [addCarddata, addCardError]);

  useEffect(() => {
    if (editCardData) {
      console.log("data:::us: ", editCardData);

      NotificationManager.success("Card updated", "", 2000);
      dispatch<any>(ResetEditCardInfoState());
      navigate("/profile/cards");
      window.location.reload();
    } else if (editCardError) {
      console.log("editCardError:::us: ", editCardError);
      NotificationManager.error(editCardError, "", 2000);
      dispatch<any>(ResetEditCardInfoState());
    }
  }, [editCardData, editCardError]);

  const [cardInputs, setCardInputs] = useState({
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
  });

  const [errors, setErrors] = useState({
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
  });

  const validate = {
    cardName: (name: string) => nameValidation("Name", name),
    cardNumber: (cardNumber: string) => cardNumberValidation(cardNumber),
    expiryMonth: (expiryMonth: any) => cardMonthValidation(expiryMonth),
    expiryYear: (expiryYear: string) => cardYearValidation(expiryYear),
    _id: () => {},
    paymenMethod: () => {},
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setCardInputs({ ...cardInputs, [name]: value });
  };
  const handleBlur = async (event: any) => {
    const { name, value } = event.target;

    let error = validate[name](value);

    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    let valid = true;
    let error = null;
    let tempErrors = errors;

    try {
      console.log("validating form ::", cardInputs);
      for (const item in cardInputs) {
        error = validate[item](cardInputs[item]);

        if (error) {
          valid = false;
        }

        tempErrors = { ...tempErrors, [item]: error };
      }
      setErrors({ ...tempErrors });
    } catch (error) {
      console.log("VALIDATION error ::: ", error);
      valid = false;
    }

    return valid;
  };

  const submitClickHandler = async (event: any) => {
    event.preventDefault();
    const isValid = validateForm();
    if (!isEditcard && isValid) {
      const reqData = {
        userId: getUserId() || "",
        authToken: getToken() || "",
        cardName: cardName,
        cardNumber: cardNumber,
        expiryMonth: expiryMonth,
        expiryYear: expiryYear,
      };
      await dispatch<any>(AddCardInfo(reqData));
    } else if (isEditcard && isValid) {
      const reqData = {
        userId: getUserId() || "",
        authToken: getToken() || "",
        cardInfoId: id || "",
        cardName: cardName,
        cardNumber: cardNumber,
        expiryMonth: expiryMonth,
        expiryYear: expiryYear,
      };
      await dispatch<any>(EditCardInfo(reqData));
    } else {
      NotificationManager.error("Invalid inputs", "", 2000);
    }
  };

  const onCancelClickHandler = () => {
    navigate("/profile/cards");
  };

  const { cardName, cardNumber, expiryMonth, expiryYear } = cardInputs;

  return (
    <div className="ad-c-container">
      <div className="form-div m-5 form-con">
        <label>{isEditcard ? "EDIT CARD" : "Add New Credit/Debit Card"}</label>
        <form id="form-car-con" className="mt-2" onSubmit={submitClickHandler}>
          <BottomLineInput
            label={"Card Number *"}
            isRequired={true}
            id="form-card"
            handleBlur={handleBlur}
            handleChange={handleChange}
            error={errors.cardNumber}
            value={cardNumber}
            type="number"
            name="cardNumber"
          />
          <BottomLineInput
            label={"Card Name *"}
            isRequired={true}
            id="form-name"
            handleBlur={handleBlur}
            handleChange={handleChange}
            error={errors.cardName}
            value={cardName}
            type="text"
            name="cardName"
          />
          <div className="ad-inp">
            <BottomLineInput
              label={"Expiry Month (DD) *"}
              isRequired={true}
              id="form-month"
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.expiryMonth}
              value={expiryMonth}
              type="number"
              name="expiryMonth"
              maxLength={2}
            />
            <BottomLineInput
              label={"Expiry Year (YYYY)*"}
              isRequired={true}
              id="form-year"
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.expiryYear}
              value={expiryYear}
              type="number"
              name="expiryYear"
              maxLength={4}
            />
          </div>
          <div className="ac-bottom-button mt-5">
            <button form="" onClick={onCancelClickHandler}>
              CANCEL
            </button>
            <button form="form-car-con">SAVE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
