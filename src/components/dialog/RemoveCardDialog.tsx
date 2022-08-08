import React from "react";
import "./DialogStyles.css";

const RemoveCardDialog = () => {
  return (
    <div
      className="modal fade"
      id="removeCardDialog"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body m-3">
            <div className="ra-body">
              <span>Remove Card</span>
              <span>Are you sure you want to delete this card?</span>
            </div>
          </div>
          <div className="border-top ra-footer">
            <span
              className=""
              data-bs-toggle="modal"
              data-bs-target="#removeCardDialog"
            >
              CANCEL
            </span>
            <span>DELETE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveCardDialog;
