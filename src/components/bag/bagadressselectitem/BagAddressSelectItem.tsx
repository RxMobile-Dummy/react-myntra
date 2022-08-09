import React from "react";

interface Props {
  adressData: any;
  index: number;
  onAddressSelect?: any;
}

const AddressSelectItem = (props: Props) => {
  const { adressData, index, onAddressSelect } = props;
  console.log("address :: ", adressData);
  return (
    <div className="form-check mt-2 border-bottom">
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id={`exampleRadios${index}`}
        value="option1"
        checked
        data-mdb-dismiss="modal"
      />
      <label className="form-check-label" htmlFor={`exampleRadios${index}`}>
        {adressData.name}
        <p className="address-label">
          {`${adressData.address},  ${adressData.locality}`}
          <br /> {`${adressData.city} - ${adressData.pinCode}`}
        </p>
      </label>
    </div>
  );
};

export default AddressSelectItem;
