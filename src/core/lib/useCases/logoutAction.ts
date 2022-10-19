import { LogoutActionType } from "../adapters/actionType/logoutActionTypes";

interface LogoutSuccess {
  type: LogoutActionType.LOGOUT_SUCCESS;
  payload: any;
}

interface LogoutError {
  type: LogoutActionType.LOGOUT_FAILED;
  payload: any;
}

interface LogoutReset {
  type: LogoutActionType.LOGOUT_RESET;
  payload: any;
}
interface isLogout {
  type: LogoutActionType.IS_LOGOUT;
  payload: any;
}

export type LogoutAction =  LogoutSuccess | LogoutError | LogoutReset | isLogout;

