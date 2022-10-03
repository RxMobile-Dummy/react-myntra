import { Dispatch } from "redux";
import { ResetPasswordActionType } from "../adapters/actionType/resetPasswordActionType";
import { ResetPasswordAction } from "../useCases/resetPasswordAction";
import  {postRequestGraphQL}  from "../network/ApiCall";

interface Props {
  email: string;
  otp: string;
  newPassword: string;
}

export const ResetPassword = (user : Props) => {

  const query = `mutation callResetPassword($email: String!, $otp: String!, $newPassword: String!, $role: String!){
    resetPassword(email: $email, otp: $otp, newPassword: $newPassword, role: $role) {
      statusCode
      message
    }
  }`

  const requestData = {
    "email": user.email,
    "role": "user",
    "otp": user.otp,
    "newPassword": user.newPassword,
  }

  return async (dispatch: Dispatch<ResetPasswordAction>) => {
    console.log("Reset password called .....");
    try {
    const data = await postRequestGraphQL(query, requestData)
    const response = data.resetPassword
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: ResetPasswordActionType.RESET_PASSWORD_SUCCESS,
        payload: response.message
      });
    }else{
      dispatch({
        type: ResetPasswordActionType.RESET_PASSWORD_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ResetPasswordActionType.RESET_PASSWORD_FAILED,
      payload: error,
    });
  }
  };
};

export const ResetPasswordResetState = () => {
  return async (dispatch: Dispatch<ResetPasswordAction>) => {
    dispatch({
      type: ResetPasswordActionType.RESET_PASSWORD_RESET,
      payload: undefined,
    });
  }
}
