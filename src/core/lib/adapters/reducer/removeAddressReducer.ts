import { RemoveAddressActionType } from "../actionType/removeAddressActionType";
import { RemoveAddressAction } from "../../useCases/removeAddressAction";


type UserState = {
  removeAdddata: any;
  removeAddError: string | undefined;
};

const initialState = {
  removeAdddata: undefined,
  removeAddError: undefined,
};

const removeAddressReducer = (state: UserState = initialState, action: RemoveAddressAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case RemoveAddressActionType.REMOVE_ADDRESS_SUCCESS:
      return {
        ...state,
        removeAdddata: action.payload,
      };
    case RemoveAddressActionType.REMOVE_ADDRESS_FAILED:
        return {
          ...state,
          removeAddError: action.payload,
        };
    case RemoveAddressActionType.REMOVE_ADDRESS_RESET:
        return {
          ...state,
          removeAdddata: action.payload,
          removeAddError: action.payload,
        };
    default:
      return state;
  }
};

export default removeAddressReducer;
