import { EditAddressActionType } from "../actionType/editAddressActionType";
import { EditAddressAction } from "../../useCases/editAddressAction";


type UserState = {
  editAdddata: any;
  editAdderror: string | undefined;
};

const initialState = {
  editAdddata: undefined,
  editAdderror: undefined,
};

const editAddressReducer = (state: UserState = initialState, action: EditAddressAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case EditAddressActionType.EDIT_ADDRESS_SUCCESS:
      return {
        ...state,
        editAdddata: action.payload,
      };
    case EditAddressActionType.EDIT_ADDRESS_FAILED:
        return {
          ...state,
          editAdderror: action.payload,
        };
    case EditAddressActionType.EDIT_ADDRESS_RESET:
        return {
          ...state,
          editAdddata: action.payload,
          editAdderror: action.payload,
        };
    default:
      return state;
  }
};

export default editAddressReducer;
