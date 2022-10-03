import { Dispatch } from "redux";
import { RemoveCardInfoActionType } from "../adapters/actionType/removeCardInfoActionType";
import { RemoveCardInfoAction } from "../useCases/removeCardInfoAction";
import  {postRequestGraphQLAuth}  from "../network/ApiCall";

interface Props {
  userId: string;
  authToken: string;
  cardInfoId: string;
}

export const RemoveCardInfo = (address : Props) => {

  const query = `mutation callRemoveCardInfo($userId: String!, $paymentInfoId: String!, $paymentMethod: String!){
    deletePaymentInfo(userId: $userId, paymentInfoId: $paymentInfoId, paymentMethod: $paymentMethod) {
      statusCode
      message
    }
  }`

  const requestData = {
      "userId": address.userId,
      "paymentInfoId": address.cardInfoId,
      "paymentMethod": "1",
  }

  return async (dispatch: Dispatch<RemoveCardInfoAction>) => {
    console.log("Remove card called .....");
    try {
    const data = await postRequestGraphQLAuth(query, requestData, address.authToken)
    const response = data.deletePaymentInfo
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: RemoveCardInfoActionType.REMOVE_CARD_INFO_SUCCESS,
        payload: response.message
      });
    }else{
      dispatch({
        type: RemoveCardInfoActionType.REMOVE_CARD_INFO_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: RemoveCardInfoActionType.REMOVE_CARD_INFO_FAILED,
      payload: error,
    });
  }
  };
};

export const ResetRemoveCardInfoState = () => {
  return async (dispatch: Dispatch<RemoveCardInfoAction>) => {
    dispatch({
      type: RemoveCardInfoActionType.REMOVE_CARD_INFO_RESET,
      payload: undefined,
    });
  }
}

