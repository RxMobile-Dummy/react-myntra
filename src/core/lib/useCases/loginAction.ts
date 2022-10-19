import { ActionType } from "../adapters/actionType/loginActionTypes";

interface Login {
  type: ActionType.LOGIN;
  payload: any;
}

interface LoginError {
  type: ActionType.LOGIN_FAILED;
  payload: any;
}
interface LoginReset {
  type: ActionType.LOGIN_RESET;
  payload: any;
}

interface Logintoekn {
  type: ActionType.LOGIN_TOKEN;
  payload: boolean;
}

export type Action =  Login | LoginError | LoginReset | Logintoekn;

