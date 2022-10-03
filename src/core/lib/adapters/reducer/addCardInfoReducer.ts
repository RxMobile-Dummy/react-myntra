import { AddCardInfoActionType } from "../actionType/addCardInfoActionType";
import { AddCardInfoAction } from "../../useCases/addCardInfoAction";


type UserState = {
  addCarddata: any;
  addCardError: string | undefined;
};

const initialState = {
  addCarddata: undefined,
  addCardError: undefined,
};

const addCardInfoReducer = (state: UserState = initialState, action: AddCardInfoAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case AddCardInfoActionType.ADD_CARD_INFO_SUCCESS:
      return {
        ...state,
        addCarddata: action.payload,
      };
    case AddCardInfoActionType.ADD_CARD_INFO_FAILED:
        return {
          ...state,
          addCardError: action.payload,
        };
    case AddCardInfoActionType.ADD_CARD_INFO_RESET:
        return {
          ...state,
          addCarddata: action.payload,
          addCardError: action.payload,
        };
    default:
      return state;
  }
};

export default addCardInfoReducer;
