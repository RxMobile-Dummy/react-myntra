import { Dispatch } from "redux";
import { ChangePasswordActionType } from "../adapters/actionType/changePasswordActionType";
import { ChangePasswordAction } from "../useCases/changePasswordAction";
import  {postRequestGraphQLAuth}  from "../network/ApiCall";

interface Props {
  userId: string;
  oldPassword: string;
  newPassword: string;
  authToken: string;
}

export const ChangePassword = (user : Props) => {

  const query = `mutation callChangePassword($userId: String!, $oldPassword: String!, $newPassword: String!) {
    changePassword(userId: $userId, oldPassword: $oldPassword, newPassword: $newPassword) {
      message
      statusCode
    }
  }`

  const requestData = {
    "userId": user.userId,
    "oldPassword": user.oldPassword,
    "newPassword": user.newPassword,
  }

  return async (dispatch: Dispatch<ChangePasswordAction>) => {
    console.log("Change password called .....");
    try {
    const data = await postRequestGraphQLAuth(query, requestData, user.authToken)
    const response = data.changePassword
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: ChangePasswordActionType.CHANGE_PASSWORD_SUCCESS,
        payload: response.message
      });
    }else{
      dispatch({
        type: ChangePasswordActionType.CHANGE_PASSWORD_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ChangePasswordActionType.CHANGE_PASSWORD_FAILED,
      payload: error,
    });
  }
  };
};

export const ResetChangePasswordState = () => {
  return async (dispatch: Dispatch<ChangePasswordAction>) => {
    dispatch({
      type: ChangePasswordActionType.CHANGE_PASSWORD_RESET,
      payload: undefined,
    });
  }
}
