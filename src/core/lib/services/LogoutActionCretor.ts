import { Dispatch } from "redux";
import { LogoutActionType } from "../adapters/actionType/logoutActionTypes";
import { LogoutAction } from "../useCases/logoutAction";
import  {postRequestGraphQLAuth}  from "../network/ApiCall";

interface Props {
  userId: string;
  authToken: string;
}

export const Logout = (address : Props) => {

  const query = `mutation logoutUserCall($userId: String!, $authToken: String!){
    logoutUser(userId: $userId, authToken: $authToken) {
      message
      statusCode
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
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: LogoutActionType.LOGOUT_SUCCESS,
        payload: response.message
      });
    }else{
      dispatch({
        type: LogoutActionType.LOGOUT_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: LogoutActionType.LOGOUT_FAILED,
      payload: error,
    });
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

