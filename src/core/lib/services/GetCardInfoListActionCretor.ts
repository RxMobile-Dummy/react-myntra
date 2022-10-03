import { Dispatch } from "redux";
import { GetCardInfoListActionType } from "../adapters/actionType/getCardInfoListActionType";
import { GetCardInfoListAction } from "../useCases/getCardInfoListAction";
import { postRequestGraphQLAuth } from "../network/ApiCall";

interface Props {
  userId: string;
  authToken: string;
}

export const GetCardInfoList = (address: Props) => {

  const query = `mutation getCardInfoListCall($userId: String!, $paymentMethod: String!){
    getPaymentInfoList(userId: $userId, paymentMethod: $paymentMethod) {
      statusCode
      message
      data {
        _id
        cardName
        cardNumber
        expiryMonth
        expiryYear
        paymentMethod
      }
    }
  }`

  const requestData = {
    "userId": address.userId,
    "paymentMethod": "1"
  }

  return async (dispatch: Dispatch<GetCardInfoListAction>) => {
    console.log("Get card info list called .....");
    try {
      const data = await postRequestGraphQLAuth(query, requestData, address.authToken)
      const response = data.getPaymentInfoList
      console.log("Value of response is", response)
      if (response && response.statusCode === 200) {
        dispatch({
          type: GetCardInfoListActionType.GET_CARD_INFO_LIST_SUCCESS,
          payload: response.data
        });
      } else {
        dispatch({
          type: GetCardInfoListActionType.GET_CARD_INFO_LIST_FAILED,
          payload: response.message,
        });
      }
    } catch (error) {
      dispatch({
        type: GetCardInfoListActionType.GET_CARD_INFO_LIST_FAILED,
        payload: error,
      });
    }
  };
};

export const ResetCardInfoListState = () => {
  return async (dispatch: Dispatch<GetCardInfoListAction>) => {
    dispatch({
      type: GetCardInfoListActionType.GET_CARD_INFO_LIST_RESET,
      payload: undefined,
    });
  }
}

