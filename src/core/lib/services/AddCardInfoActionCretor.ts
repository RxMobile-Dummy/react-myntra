import { Dispatch } from "redux";
import { AddCardInfoActionType } from "../adapters/actionType/addCardInfoActionType";
import { AddCardInfoAction } from "../useCases/addCardInfoAction";
import  {postRequestGraphQLAuth}  from "../network/ApiCall";

interface Props {
  userId: string;
  authToken: string;
  cardNumber: string;
  cardName: string;
  expiryMonth: string;
  expiryYear: string;
}

export const AddCardInfo = (card : Props) => {

  const query = `mutation addCardInfoCall($userId: String!, $paymentMethod: String!, $cardNumber: String, $cardName: String, $expiryMonth: String, $expiryYear: String) {
    addPaymentInfo(userId: $userId, paymentMethod: $paymentMethod, cardNumber: $cardNumber, cardName: $cardName, expiryMonth: $expiryMonth, expiryYear: $expiryYear) {
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
  }

  return async (dispatch: Dispatch<AddCardInfoAction>) => {
    console.log("Add card info called .....");
    try {
    const data = await postRequestGraphQLAuth(query, requestData, card.authToken)
    const response = data.addPaymentInfo
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: AddCardInfoActionType.ADD_CARD_INFO_SUCCESS,
        payload: response.message
      });
    }else{
      dispatch({
        type: AddCardInfoActionType.ADD_CARD_INFO_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: AddCardInfoActionType.ADD_CARD_INFO_FAILED,
      payload: error,
    });
  }
  };
};

export const ResetAddCardInfoState = () => {
  return async (dispatch: Dispatch<AddCardInfoAction>) => {
    dispatch({
      type: AddCardInfoActionType.ADD_CARD_INFO_RESET,
      payload: undefined,
    });
  }
}

