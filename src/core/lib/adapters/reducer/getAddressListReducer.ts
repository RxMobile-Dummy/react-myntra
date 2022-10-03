import { GetAddressListActionType } from "../actionType/getAddressListActionType";
import { GetAddressListAction } from "../../useCases/getAddressListAction";


type UserState = {
  addressListData: any;
  addressListError: string | undefined;
};

const initialState = {
  addressListData: undefined,
  addressListError: undefined,
};

const getAddressListReducer = (state: UserState = initialState, action: GetAddressListAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case GetAddressListActionType.GET_ADDRESS_LIST_SUCCESS:
      return {
        ...state,
        addressListData: action.payload,
      };
    case GetAddressListActionType.GET_ADDRESS_LIST_FAILED:
        return {
          ...state,
          addressListError: action.payload,
        };
    case GetAddressListActionType.GET_ADDRESS_LIST_RESET:
        return {
          ...state,
          addressListData: action.payload,
          addressListError: action.payload,
        };
    default:
      return state;
  }
};

export default getAddressListReducer;
