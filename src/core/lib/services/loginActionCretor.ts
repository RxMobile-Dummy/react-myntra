import { Dispatch } from "redux";
import { ActionType } from "../adapters/actionType/loginActionTypes";
import { Action } from "../useCases/loginAction";
// import  {PostApi,postRequest}  from "../network/ApiCall";

export const Login = (user : any) => {
  return async (dispatch: Dispatch<Action>) => {
    // const response = await postRequest("login",user);
    const response = {
      name: "arjun",
      email: "arjun@gmail.com",
    };
    console.log("Value of response is", response)
    dispatch({
      type: ActionType.LOGIN,
      payload: response
    });
  };
  //console.log("***********************")
};

