import { RemoveCardInfoActionType } from "../actionType/removeCardInfoActionType";
import { RemoveCardInfoAction } from "../../useCases/removeCardInfoAction";


type UserState = {
  removeCarddata: any;
  removeCardError: string | undefined;
};

const initialState = {
  removeCarddata: undefined,
  removeCardError: undefined,
};

const removeCardInfoReducer = (state: UserState = initialState, action: RemoveCardInfoAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case RemoveCardInfoActionType.REMOVE_CARD_INFO_SUCCESS:
      return {
        ...state,
        removeCarddata: action.payload,
      };
    case RemoveCardInfoActionType.REMOVE_CARD_INFO_FAILED:
        return {
          ...state,
          removeCardError: action.payload,
        };
    case RemoveCardInfoActionType.REMOVE_CARD_INFO_RESET:
        return {
          ...state,
          removeCarddata: action.payload,
          removeCardError: action.payload,
        };
    default:
      return state;
  }
};

export default removeCardInfoReducer;
