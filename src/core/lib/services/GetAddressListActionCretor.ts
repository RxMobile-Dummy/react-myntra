import { Dispatch } from "redux";
import { GetAddressListActionType } from "../adapters/actionType/getAddressListActionType";
import { GetAddressListAction } from "../useCases/getAddressListAction";
import { postRequestGraphQLAuth } from "../network/ApiCall";

interface Props {
  userId: string;
  authToken: string;
}

export const GetAddressList = (address: Props) => {

  const query = `query getAddressListCall($userId: String!){
    getAddressList(userId: $userId) {
      statusCode
      message
      data {
        _id
        billingAddress
        name
        mobileNo
        pinCode
        country
        state
        city
        shippingAddress
        locality
        isDefault
        type
        userId
      }
    }
  }`

  const requestData = {
    "userId": address.userId
  }

  return async (dispatch: Dispatch<GetAddressListAction>) => {
    console.log("Get address list called .....");
    try {
      const data = await postRequestGraphQLAuth(query, requestData, address.authToken)
      const response = data.getAddressList
      console.log("Value of response is", response)
      if (response && response.statusCode === 200) {
        dispatch({
          type: GetAddressListActionType.GET_ADDRESS_LIST_SUCCESS,
          payload: response.data
        });
      } else {
        dispatch({
          type: GetAddressListActionType.GET_ADDRESS_LIST_FAILED,
          payload: response.message,
        });
      }
    } catch (error) {
      dispatch({
        type: GetAddressListActionType.GET_ADDRESS_LIST_FAILED,
        payload: error,
      });
    }
  };
};

export const ResetAddressListState = () => {
  return async (dispatch: Dispatch<GetAddressListAction>) => {
    dispatch({
      type: GetAddressListActionType.GET_ADDRESS_LIST_RESET,
      payload: undefined,
    });
  }
}

