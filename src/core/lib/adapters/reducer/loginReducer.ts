import { ActionType } from "../actionType/loginActionTypes";
import { Action } from "../../useCases/";


type UserState = {
  loginData: any;
  error: string | undefined;
};

const initialState = {
  loginData: undefined,
  error: undefined,
};

const loginReducer = (state: UserState = initialState, action: Action): any => {
  console.log("action payload:", action.payload);
  
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        loginData: action.payload,
      };
    case ActionType.LOGIN_FAILED:
        return {
          ...state,
          error: action.payload,
        };
    case ActionType.LOGIN_RESET:
        return {
          ...state,
          error: action.payload,
          loginData: action.payload,
        };
    default:
      return state;
  }
};

export default loginReducer;
