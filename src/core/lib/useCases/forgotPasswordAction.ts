import { ForgotPasswordActionType } from "../adapters/actionType/forgotPasswordActionType";

interface ForgotPasswordSuccess {
  type: ForgotPasswordActionType.FORGOT_PASSWORD_SUCCESS;
  payload: any;
}

export interface ForgotPasswordError {
  readonly type: ForgotPasswordActionType.FORGOT_PASSWORD_FAILED;
  payload: any;
}

export interface ForgotPasswordReset {
  readonly type: ForgotPasswordActionType.FORGOT_PASSWORD_RESET;
  payload: any;
}

export type ForgotPasswordAction =  ForgotPasswordSuccess | ForgotPasswordError | ForgotPasswordReset;
