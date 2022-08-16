import React from "react";
import "./DialogStyles.css";

const RemoveAddressDialog = () => {
  return (
    <div
      className="modal fade"
      id="removeAddressDialog"
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
              <span>Delete Confirmation</span>
              <span>Are you sure you want to delete this address?</span>
            </div>
          </div>
          <div className="border-top ra-footer">
            <span
              className=""
              data-bs-toggle="modal"
              data-bs-target="#removeAddressDialog"
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

export default RemoveAddressDialog;
