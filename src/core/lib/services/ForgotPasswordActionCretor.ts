import { Dispatch } from "redux";
import { ForgotPasswordActionType } from "../adapters/actionType/forgotPasswordActionType";
import { ForgotPasswordAction } from "../useCases/forgotPasswordAction";
import  {postRequestGraphQL}  from "../network/ApiCall";

interface Props {
  email: string;
}

export const ForgotPassword = (user : Props) => {

  const query = `mutation callForgotPassword($email: String!, $role: String!){
    forgotPassword(email: $email, role: $role) {
      statusCode
      message
    }
  }`

  const requestData = {
    "email": user.email,
    "role": "user",
  }

  return async (dispatch: Dispatch<ForgotPasswordAction>) => {
    console.log("Forgot password called .....");
    try {
    const data = await postRequestGraphQL(query, requestData)
    const response = data.forgotPassword
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: ForgotPasswordActionType.FORGOT_PASSWORD_SUCCESS,
        payload: response.message
      });
    }else{
      dispatch({
        type: ForgotPasswordActionType.FORGOT_PASSWORD_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ForgotPasswordActionType.FORGOT_PASSWORD_FAILED,
      payload: error,
    });
  }
  };
};

export const ResetForgotPasswordState = () => {
  return async (dispatch: Dispatch<ForgotPasswordAction>) => {
    dispatch({
      type: ForgotPasswordActionType.FORGOT_PASSWORD_RESET,
      payload: undefined,
    });
  }
}

