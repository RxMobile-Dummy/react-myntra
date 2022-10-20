import { Dispatch } from "redux";
import { LogoutActionType } from "../adapters/actionType/logoutActionTypes";
import { ActionType } from "../adapters/actionType/loginActionTypes"
import { LogoutAction } from "../useCases/logoutAction";
import { postRequestGraphQLAuth } from "../network/ApiCall";
import { Action } from "../useCases";

interface Props {
  userId: string;
  authToken: string;
}

export const isLoggedIn = (payload: boolean) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_TOKEN,
      payload: payload
    })
  }
}


export const Logout = (address: Props) => {

  const query = `mutation logoutUserCall($userId: String!, $authToken: String!){
    logoutUser(userId: $userId, authToken: $authToken) {
      message
      statusCode
      data {
      token
     }
    }
  }`

  const requestData = {
    "userId": address.userId,
    "authToken": address.authToken,
  }

  return async (dispatch: Dispatch<LogoutAction>) => {
    console.log("Add address called .....");
    try {
      const data = await postRequestGraphQLAuth(query, requestData, address.authToken)
      const response = data.logoutUser
      let responseData = response.data
      // const newResponse = Object.assign(responseData, {isLoginFlag: false});
      if (response && response.statusCode == 200) {
        dispatch({
          type: LogoutActionType.LOGOUT_SUCCESS,
          payload: response.message
        });
        return { status: true, data: response.data }
      } else {
        dispatch({
          type: LogoutActionType.LOGOUT_FAILED,
          payload: response.message,
        });
        return { status: false, data: response.data }
      }
    } catch (error) {
      dispatch({
        type: LogoutActionType.LOGOUT_FAILED,
        payload: error,
      });
      return { status: false, data: error }
    }
  };
};

export const ResetLogoutState = () => {
  return async (dispatch: Dispatch<LogoutAction>) => {
    dispatch({
      type: LogoutActionType.LOGOUT_RESET,
      payload: undefined,
    });
  }
}

