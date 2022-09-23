import { ActionType } from "../adapters/actionType/loginActionTypes";

interface Login {
  type: ActionType.LOGIN;
  payload: any;
}

export type Action =  Login;
