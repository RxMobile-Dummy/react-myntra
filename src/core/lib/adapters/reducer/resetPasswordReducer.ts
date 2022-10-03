import { ResetPasswordActionType } from "../actionType/resetPasswordActionType";
import { ResetPasswordAction } from "../../useCases/resetPasswordAction";


type UserState = {
  resetData: any;
  resetError: string | undefined;
};

const initialState = {
  resetData: undefined,
  resetError: undefined,
};

const resetPasswordReducer = (state: UserState = initialState, action: ResetPasswordAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case ResetPasswordActionType.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetData: action.payload,
      };
    case ResetPasswordActionType.RESET_PASSWORD_FAILED:
        return {
          ...state,
          resetError: action.payload,
        };
    case ResetPasswordActionType.RESET_PASSWORD_RESET:
        return {
          ...state,
          resetData: action.payload,
          resetError: action.payload,
        };
    default:
      return state;
  }
};

export default resetPasswordReducer;
