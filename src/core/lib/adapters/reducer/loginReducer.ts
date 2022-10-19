import { ActionType } from "../actionType/loginActionTypes";
import { Action } from "../../useCases/";


type UserState = {
  loginData: any;
  error: string | undefined;
  token : boolean
};

const initialState = {
  loginData: undefined,
  error: undefined,
  token: false
};

const loginReducer = (state: UserState = initialState, action: Action): any => {
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
    case ActionType.LOGIN_TOKEN:
      console.log("Value in reducers is",action.payload)
      return {
        ...state,
        token : action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
