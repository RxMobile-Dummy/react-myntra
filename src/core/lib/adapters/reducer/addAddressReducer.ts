import { AddAddressActionType } from "../actionType/addAddressActionType";
import { AddAddressAction } from "../../useCases/addAddressAction";


type UserState = {
  data: any;
  error: string | undefined;
};

const initialState = {
  data: undefined,
  error: undefined,
};

const addAddressReducer = (state: UserState = initialState, action: AddAddressAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case AddAddressActionType.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case AddAddressActionType.ADD_ADDRESS_FAILED:
        return {
          ...state,
          error: action.payload,
        };
    case AddAddressActionType.ADD_ADDRESS_RESET:
        return {
          ...state,
          data: action.payload,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default addAddressReducer;
