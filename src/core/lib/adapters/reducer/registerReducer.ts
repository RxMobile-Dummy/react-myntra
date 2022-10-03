import { RegisterActionType } from "../actionType/registerActionType";
import { RegisterAction } from "../../useCases/registerAction";


type UserState = {
  data: any;
  error: string | undefined;
};

const initialState = {
  data: undefined,
  error: undefined,
};

const registerReducer = (state: UserState = initialState, action: RegisterAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case RegisterActionType.REGISTER:
      return {
        ...state,
        data: action.payload,
      };
    case RegisterActionType.REGISTER_FAILED:
        return {
          ...state,
          error: action.payload,
        };
    case RegisterActionType.REGISTER_RESET:
        return {
          ...state,
          data: action.payload,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default registerReducer;
