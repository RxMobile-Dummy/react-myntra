import { LogoutActionType } from "../actionType/logoutActionTypes";
import { LogoutAction } from "../../useCases";


type UserState = {
  logoutData: any;
  logoutError: string | undefined;
};

const initialState = {
  logoutData: undefined,
  logoutError: undefined,
};

const logoutReducer = (state: UserState = initialState, action: LogoutAction): any => {
  console.log("action payload:", action.payload);
  
  switch (action.type) {
    case LogoutActionType.LOGOUT_SUCCESS:
      return {
        ...state,
        logoutData: action.payload,
      };
    case LogoutActionType.LOGOUT_FAILED:
        return {
          ...state,
          logoutError: action.payload,
        };
    case LogoutActionType.LOGOUT_RESET:
        return {
          ...state,
          logoutData: action.payload,
          logoutError: action.payload,
        };
    default:
      return state;
  }
};

export default logoutReducer;
