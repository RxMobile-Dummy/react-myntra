import { Dispatch } from "redux";
import { ActionType } from "../adapters/actionType/loginActionTypes";
import { postRequestGraphQL } from "../network";
import { Action } from "../useCases/loginAction";
// import  {PostApi,postRequest}  from "../network/ApiCall";

interface Props {
  email: string;
  password: string;
  fcmToken: string;
  deviceId: string;
  role: string;
}

export const Login = (user : Props) => {
  const query = `mutation loginUserCall($email: String!, $password: String!, $fcmToken: String!, $deviceId: String!, $role: String!) {
    loginUser(email: $email, password: $password, fcmToken: $fcmToken, deviceId: $deviceId, role: $role) {
    statusCode
    message
    data {
       _id
     fullName
     email
     mobileNo
     gender
     dob
     country
     isVerified
     token
     deviceId
     platform
    }
    }
  }`

  const requestData = {
    "email": user.email,
    "password": user.password,
    "fcmToken": user.fcmToken,
    "deviceId": user.deviceId,
    "role": user.role,
  }
  
  return async (dispatch: Dispatch<Action>) => {
    console.log("Login called .....", requestData);
    try {
    const data = await postRequestGraphQL(query, requestData)
    const response = data.loginUser
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: ActionType.LOGIN,
        payload: response.data
      });
    }else{
      dispatch({
        type: ActionType.LOGIN_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ActionType.LOGIN_FAILED,
      payload: error,
    });
  }
};
};

export const ResetLoginState = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_RESET,
      payload: undefined,
    });
  }
}
