import console from "console";
import React from "react";
import { AddressesDummy } from "../../constants/AddressesDummy";
import AddressSelectItem from "../bag/bagadressselectitem/BagAddressSelectItem";
import "./DialogStyles.css";

const ChangeAddressDialog = () => {
  // function closeDialog() {
  //   let changeAddressDialog = document.getElementById("changeAddressDialog");
  //   changeAddressDialog.style.display = "none";
  //   changeAddressDialog.close();
  // }
  return (
    <div
      className="modal fade"
      id="changeAddressDialog"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="staticBackdropLabel">
              Change Delivery Address
            </h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              id="input-form"
              onSubmit={() => {}}
              className="form-container"
            >
              <div className="pin-div">
                <input
                  type="text"
                  className="pin-input"
                  id="inlineFormInputGroup"
                  placeholder="Enter Pincode"
                />
                <button className="check-btn" form="">
                  Check
                </button>
              </div>
            </form>
            <div className="div-or">OR</div>
            {AddressesDummy.map((data: any, index: number) => {
              return (
                <AddressSelectItem
                  key={index}
                  adressData={data}
                  index={index}
                />
              );
            })}
          </div>
          <div className="border border-dark ad-footer mt-2 m-2">
            <button
              className=""
              data-bs-toggle="modal"
              data-bs-target="#editAddressDialog"
            >
              ADD NEW ADDRESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeAddressDialog;
