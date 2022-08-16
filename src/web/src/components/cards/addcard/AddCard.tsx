import React, { useEffect, useState } from "react";
import "./AddCard.css";
import BottomLineInput from "../../input/BottomLineInput";
import { useParams } from "react-router-dom";

const AddCard = () => {
  const [isEditcard, setEditCard] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    console.log(`/cards/${id}`);
    if (id === "0") {
      console.log(`card not edit`);
      setEditCard(false);
    } else {
      console.log(`card edit`);
      setEditCard(true);
    }
  }, []);

  return (
    <div className="ad-c-container">
      <div className="form-div m-5 form-con">
        <label>{isEditcard ? "EDIT CARD" : "Add New Credit/Debit Card"}</label>
        <form id="form-car-con" className="mt-2">
          <BottomLineInput
            label={"Card Number *"}
            isRequired={true}
            id="form-card"
          />
          <BottomLineInput
            label={"Card Name *"}
            isRequired={true}
            id="form-name"
          />
          <div className="ad-inp">
            <BottomLineInput
              label={"Expiry Month (DD) *"}
              isRequired={true}
              id="form-month"
            />
            <BottomLineInput
              label={"Expiry Year (YYYY)*"}
              isRequired={true}
              id="form-year"
            />
          </div>
          <div className="ac-bottom-button mt-5">
            <button form="">CANCEL</button>
            <button form="form-car-con">SAVE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
