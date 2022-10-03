import { ResetPasswordActionType } from "../adapters/actionType/resetPasswordActionType";

interface ResetPasswordSuccess {
  type: ResetPasswordActionType.RESET_PASSWORD_SUCCESS;
  payload: any;
}

export interface ResetPasswordError {
  readonly type: ResetPasswordActionType.RESET_PASSWORD_FAILED;
  payload: any;
}

export interface ResetPasswordReset {
  readonly type: ResetPasswordActionType.RESET_PASSWORD_RESET;
  payload: any;
}

export type ResetPasswordAction =  ResetPasswordSuccess | ResetPasswordError | ResetPasswordReset;
