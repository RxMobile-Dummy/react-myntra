import { GetCardInfoListActionType } from "../actionType/getCardInfoListActionType";
import { GetCardInfoListAction } from "../../useCases/getCardInfoListAction";


type UserState = {
  getCardListData: any;
  getCardListError: string | undefined;
};

const initialState = {
  getCardListData: undefined,
  getCardListError: undefined,
};

const getCardInfoListReducer = (state: UserState = initialState, action: GetCardInfoListAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case GetCardInfoListActionType.GET_CARD_INFO_LIST_SUCCESS:
      return {
        ...state,
        getCardListData: action.payload,
      };
    case GetCardInfoListActionType.GET_CARD_INFO_LIST_FAILED:
        return {
          ...state,
          getCardListError: action.payload,
        };
    case GetCardInfoListActionType.GET_CARD_INFO_LIST_RESET:
        return {
          ...state,
          getCardListData: action.payload,
          getCardListError: action.payload,
        };
    default:
      return state;
  }
};

export default getCardInfoListReducer;
