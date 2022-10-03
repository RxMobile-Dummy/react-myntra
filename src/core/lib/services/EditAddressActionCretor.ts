import { Dispatch } from "redux";
import { EditAddressActionType } from "../adapters/actionType/editAddressActionType";
import { EditAddressAction } from "../useCases/editAddressAction";
import  {postRequestGraphQLAuth}  from "../network/ApiCall";

interface Props {
  userId: string;
  addressId: string;
  authToken: string;
  name: string;
  mobileNo: string;
  pinCode: string;
  country: string;
  state: string;
  city: string;
  billingAddress: string;
  shippingAddress: string;
  locality: string;
  type: string;
  isDefault: boolean;
}

export const EditAddress = (address : Props) => {

  const query = `mutation editAddressCall($userId: String!, $addressId: String!, $name: String!, $mobileNo: String!, $pinCode: String!, $country: String!, $state: String!, $city: String!, $billingAddress: String!, $shippingAddress: String!, $locality: String!, $isDefault: Boolean!, $type: String!){
    editAddress(userId: $userId, addressId: $addressId, name: $name, mobileNo: $mobileNo, pinCode: $pinCode, country: $country, state: $state, city: $city, billingAddress: $billingAddress, shippingAddress: $shippingAddress, locality: $locality, isDefault: $isDefault, type: $type) {
      statusCode
      message
    }
    }`

  const requestData = {
      "userId": address.userId,
      "addressId": address.addressId,
      "name": address.name,
      "mobileNo": address.mobileNo,
      "pinCode": address.pinCode,
      "country": address.country,
      "state": address.state,
      "city": address.city,
      "billingAddress": address.billingAddress,
      "shippingAddress": address.shippingAddress,
      "locality": address.locality,
      "isDefault": address.isDefault,
      "type": address.type
  }

  return async (dispatch: Dispatch<EditAddressAction>) => {
    console.log("Edit address called .....");
    try {
    const data = await postRequestGraphQLAuth(query, requestData, address.authToken)
    const response = data.editAddress
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: EditAddressActionType.EDIT_ADDRESS_SUCCESS,
        payload: response.message
      });
    }else{
      dispatch({
        type: EditAddressActionType.EDIT_ADDRESS_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: EditAddressActionType.EDIT_ADDRESS_FAILED,
      payload: error,
    });
  }
  };
};

export const ResetEditAddressState = () => {
  return async (dispatch: Dispatch<EditAddressAction>) => {
    dispatch({
      type: EditAddressActionType.EDIT_ADDRESS_RESET,
      payload: undefined,
    });
  }
}

