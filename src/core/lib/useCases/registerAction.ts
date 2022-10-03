import { RegisterActionType } from "../adapters/actionType/registerActionType";

interface Register {
  type: RegisterActionType.REGISTER;
  payload: any;
}

export interface RegisterError {
  readonly type: RegisterActionType.REGISTER_FAILED;
  payload: any;
}

export interface RegisterReset {
  readonly type: RegisterActionType.REGISTER_RESET;
  payload: any;
}

export type RegisterAction =  Register | RegisterError | RegisterReset;
