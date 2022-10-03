import { ChangePasswordActionType } from "../adapters/actionType/changePasswordActionType";

interface ChangePasswordSuccess {
  type: ChangePasswordActionType.CHANGE_PASSWORD_SUCCESS;
  payload: any;
}

export interface ChangePasswordError {
  readonly type: ChangePasswordActionType.CHANGE_PASSWORD_FAILED;
  payload: any;
}

export interface ChangePasswordReset {
  readonly type: ChangePasswordActionType.CHANGE_PASSWORD_RESET;
  payload: any;
}

export type ChangePasswordAction =  ChangePasswordSuccess | ChangePasswordError | ChangePasswordReset;
