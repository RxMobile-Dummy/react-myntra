import { Dispatch } from "redux";
import { EditCardInfoActionType } from "../adapters/actionType/editCardInfoActionType";
import { EditCardInfoAction } from "../useCases/editCardInfoAction";
import  {postRequestGraphQLAuth}  from "../network/ApiCall";

interface Props {
  userId: string;
  authToken: string;
  cardInfoId: string;
  cardNumber: string;
  cardName: string;
  expiryMonth: string;
  expiryYear: string;
}

export const EditCardInfo = (card : Props) => {

  const query = `mutation callEditCardInfo($userId: String!, $paymentInfoId: String!, $paymentMethod: String!, $cardNumber: String, $cardName: String, $expiryMonth: String, $expiryYear: String){
    editPaymentInfo(userId: $userId, paymentInfoId: $paymentInfoId, paymentMethod: $paymentMethod, cardNumber: $cardNumber, cardName: $cardName, expiryMonth: $expiryMonth, expiryYear: $expiryYear) {
      statusCode
      message
    }
  }`

  const requestData = {
      "userId": card.userId,
      "paymentMethod": "1",
      "cardNumber": card.cardNumber,
      "cardName": card.cardName,
      "expiryMonth": card.expiryMonth,
      "expiryYear": card.expiryYear,
      "paymentInfoId": card.cardInfoId,
  }

  return async (dispatch: Dispatch<EditCardInfoAction>) => {
    console.log("Edit card info called .....");
    try {
    const data = await postRequestGraphQLAuth(query, requestData, card.authToken)
    const response = data.editPaymentInfo
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: EditCardInfoActionType.EDIT_CARD_INFO_SUCCESS,
        payload: response.message
      });
    }else{
      dispatch({
        type: EditCardInfoActionType.EDIT_CARD_INFO_SUCCESS,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: EditCardInfoActionType.EDIT_CARD_INFO_SUCCESS,
      payload: error,
    });
  }
  };
};

export const ResetEditCardInfoState = () => {
  return async (dispatch: Dispatch<EditCardInfoAction>) => {
    dispatch({
      type: EditCardInfoActionType.EDIT_CARD_INFO_RESET,
      payload: undefined,
    });
  }
}

