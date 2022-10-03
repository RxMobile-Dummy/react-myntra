import { EditCardInfoActionType } from "../actionType/editCardInfoActionType";
import { EditCardInfoAction } from "../../useCases/editCardInfoAction";


type UserState = {
  editCardData: any;
  editCardError: string | undefined;
};

const initialState = {
  editCardData: undefined,
  editCardError: undefined,
};

const editCardInfoReducer = (state: UserState = initialState, action: EditCardInfoAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case EditCardInfoActionType.EDIT_CARD_INFO_SUCCESS:
      return {
        ...state,
        editCardData: action.payload,
      };
    case EditCardInfoActionType.EDIT_CARD_INFO_FAILED:
        return {
          ...state,
          editCardError: action.payload,
        };
    case EditCardInfoActionType.EDIT_CARD_INFO_RESET:
        return {
          ...state,
          editCardData: action.payload,
          editCardError: action.payload,
        };
    default:
      return state;
  }
};

export default editCardInfoReducer;
