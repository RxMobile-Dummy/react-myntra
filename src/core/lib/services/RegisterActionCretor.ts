import { Dispatch } from "redux";
import { RegisterActionType } from "../adapters/actionType/registerActionType";
import { RegisterAction } from "../useCases/registerAction";
import  {postRequestGraphQL}  from "../network/ApiCall";

interface Props {
  customerName: string;
  email: string;
  contactNumber: string;
  gender: string;
  dob: string;
  country: string;
  password: string;
  fcmToken: string;
  deviceId: string;
  platform: string;
}

export const isRegister = (payload : boolean) => {
  return async (dispatch : Dispatch<RegisterAction>) => {
    dispatch({
      type : RegisterActionType.IS_REGISTER,
      payload : payload
    })
  }
}

export const Register = (user : Props) => {

  const query = `mutation registerUserCall($fullName: String!, $email: String!, $mobileNo: String!, $gender: String!, $dob: String!, $country: String!, $password: String!, $role: String!, $isVerified: Boolean!, $fcmToken: String!, $deviceId: String!, $platform: String!) {
    registerUser(fullName: $fullName, email: $email, mobileNo: $mobileNo, gender: $gender, dob: $dob, country: $country, password: $password, role: $role, isVerified: $isVerified, fcmToken: $fcmToken, deviceId: $deviceId, platform: $platform) {
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

  return async (dispatch: Dispatch<RegisterAction>) => {
    console.log("Register called .....");
    try {
    const data = await postRequestGraphQL(query, requestData)
    console.log("Value of response is", data)
    const response = data.registerUser

    if(response && response.statusCode === 200){
      dispatch({
        type: RegisterActionType.REGISTER,
        payload: response.data
      });
      return {status : true, responseData : response.data}
    }else{
      dispatch({
        type: RegisterActionType.REGISTER_FAILED,
        payload: response.message,
      });
      return {status : false, responseData : response.data}
    }
  } catch (error) {
    console.log("Errror is", error)
    dispatch({
      type: RegisterActionType.REGISTER_FAILED,
      payload: error,
    });
    return {status : false, responseData : error}
  }
  };
};

export const ResetRegisterState = () => {
  return async (dispatch: Dispatch<RegisterAction>) => {
    dispatch({
      type: RegisterActionType.REGISTER_RESET,
      payload: undefined,
    });
  }
}

