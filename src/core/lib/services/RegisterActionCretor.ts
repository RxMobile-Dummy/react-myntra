import { Dispatch } from "redux";
import { RegisterActionType } from "../adapters/actionType/registerActionType";
import { RegisterAction } from "../useCases/registerAction";
import  {PostApi, postRequest, postRequestGraphQL}  from "../network/ApiCall";

import axios from "axios";
import URL from "../network/URL";

export const Register = (user : any) => {

  const query = `mutation registerUserCall($fullName: String!, $email: String!, $mobileNo: String!, $gender: String!, $dob: String!, $country: String!, $password: String!, $role: String!, $isVerified: Boolean!, $fcmToken: String!, $deviceId: String!, $platform: String!) {
    registerUser(fullName: $fullName, email: $email, mobileNo: $mobileNo, gender: $gender, dob: $dob, country: $country, password: $password, role: $role, isVerified: $isVerified, fcmToken: $fcmToken, deviceId: $deviceId, platform: $platform) {
       statusCode
       message
       data {
         _id
         email
         fullName
       }
     }
   }`

  const requestData = {
    "fullName": user.customerName,
    "email": user.email,
    "mobileNo": user.contactNumber,
    "gender": user.gender,
    "dob": user.dob,
    "country": user.country,
    "password": user.password,
    "role": "user",
    "isVerified": false,
    "fcmToken": user.fcmToken,
    "deviceId": user.deviceId,
    "platform": user.platform,
  }

  // const reqData = {
  //   "fullName": "test",
  //   "email": "test1@example.com",
  //   "mobileNo": "324543534",
  //   "gender": "male",
  //   "dob": "12312312",
  //   "country": "india",
  //   "password": "12345678",
  //   "role": "user",
  //   "isVerified": false,
  //   "fcmToken": "jsad89d8asd",
  //   "deviceId": "324234234",
  //   "platform": "web"
  // }
  return async (dispatch: Dispatch<RegisterAction>) => {
    console.log("Register called .....");
    try {
    const data = await postRequestGraphQL(query, requestData)
    const response = data.registerUser
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: RegisterActionType.REGISTER,
        payload: response.data
      });
    }else{
      dispatch({
        type: RegisterActionType.REGISTER_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: RegisterActionType.REGISTER_FAILED,
      payload: error,
    });
  }
  };
};

