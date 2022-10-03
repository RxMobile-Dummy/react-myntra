import { Dispatch } from "redux";
import { AddAddressActionType } from "../adapters/actionType/addAddressActionType";
import { AddAddressAction } from "../useCases/addAddressAction";
import  {postRequestGraphQLAuth}  from "../network/ApiCall";

interface Props {
  userId: string;
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

export const AddAddress = (address : Props) => {

  const query = `mutation addAdddressCall($userId: String!, $name: String!, $mobileNo: String!, $pinCode: String!, $country: String!, $state: String!, $city: String!, $billingAddress: String!, $shippingAddress: String!, $locality: String!, $isDefault: Boolean!, $type: String!) {
    addAddress(userId: $userId, name: $name, mobileNo: $mobileNo, pinCode: $pinCode, country: $country, state: $state, city: $city, billingAddress: $billingAddress, shippingAddress: $shippingAddress, locality: $locality, isDefault: $isDefault, type: $type) {
      statusCode
      message
      data {
        _id
      }
    }
  }`

  const requestData = {
      "userId": address.userId,
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

  return async (dispatch: Dispatch<AddAddressAction>) => {
    console.log("Add address called .....");
    try {
    const data = await postRequestGraphQLAuth(query, requestData, address.authToken)
    const response = data.addAddress
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: AddAddressActionType.ADD_ADDRESS_SUCCESS,
        payload: response.message
      });
    }else{
      dispatch({
        type: AddAddressActionType.ADD_ADDRESS_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: AddAddressActionType.ADD_ADDRESS_FAILED,
      payload: error,
    });
  }
  };
};


export const ResetAddAddressState = () => {
  return async (dispatch: Dispatch<AddAddressAction>) => {
    dispatch({
      type: AddAddressActionType.ADD_ADDRESS_RESET,
      payload: undefined,
    });
  }
}

