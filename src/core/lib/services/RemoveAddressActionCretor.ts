import { Dispatch } from "redux";
import { RemoveAddressActionType } from "../adapters/actionType/removeAddressActionType";
import { RemoveAddressAction } from "../useCases/removeAddressAction";
import  {postRequestGraphQLAuth}  from "../network/ApiCall";

interface Props {
  userId: string;
  authToken: string;
  addressId: string;
}

export const RemoveAddress = (address : Props) => {

  const query = `query removeAddressCall($userId: String!, $addressId: String!){
    deleteAddress(userId: $userId, addressId: $addressId) {
      statusCode
      message
    }
  }`

  const requestData = {
      "userId": address.userId,
      "addressId": address.addressId,
  }

  return async (dispatch: Dispatch<RemoveAddressAction>) => {
    console.log("Remove address called .....");
    try {
    const data = await postRequestGraphQLAuth(query, requestData, address.authToken)
    const response = data.deleteAddress
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: RemoveAddressActionType.REMOVE_ADDRESS_SUCCESS,
        payload: response.message
      });
    }else{
      dispatch({
        type: RemoveAddressActionType.REMOVE_ADDRESS_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: RemoveAddressActionType.REMOVE_ADDRESS_FAILED,
      payload: error,
    });
  }
  };
};

export const ResetRemoveAddressState = () => {
  return async (dispatch: Dispatch<RemoveAddressAction>) => {
    dispatch({
      type: RemoveAddressActionType.REMOVE_ADDRESS_RESET,
      payload: undefined,
    });
  }
}
