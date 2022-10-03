import { ChangePasswordActionType } from "../actionType/changePasswordActionType";
import { ChangePasswordAction } from "../../useCases/changePasswordAction";


type UserState = {
  data: any;
  error: string | undefined;
};

const initialState = {
  data: undefined,
  error: undefined,
};

const changePasswordReducer = (state: UserState = initialState, action: ChangePasswordAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case ChangePasswordActionType.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ChangePasswordActionType.CHANGE_PASSWORD_FAILED:
        return {
          ...state,
          error: action.payload,
        };
    case ChangePasswordActionType.CHANGE_PASSWORD_RESET:
        return {
          ...state,
          data: action.payload,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default changePasswordReducer;
