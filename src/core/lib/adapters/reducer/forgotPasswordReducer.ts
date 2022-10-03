import { ForgotPasswordActionType } from "../actionType/forgotPasswordActionType";
import { ForgotPasswordAction } from "../../useCases/forgotPasswordAction";


type UserState = {
  data: any;
  error: string | undefined;
};

const initialState = {
  data: undefined,
  error: undefined,
};

const forgotPasswordReducer = (state: UserState = initialState, action: ForgotPasswordAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case ForgotPasswordActionType.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ForgotPasswordActionType.FORGOT_PASSWORD_FAILED:
        return {
          ...state,
          error: action.payload,
        };
    case ForgotPasswordActionType.FORGOT_PASSWORD_RESET:
        return {
          ...state,
          data: action.payload,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default forgotPasswordReducer;
