import { Dispatch } from "redux";
import { EditProfileActionType } from "../adapters/actionType/editProfileActionType";
import { EditProfileAction } from "../useCases/editProfileAction";
import  {postRequestGraphQLAuth}  from "../network/ApiCall";

interface Props {
  userId: string;
  authToken: string;
  fullName: string;
  country: string;
  gender: string;
  dob: string;
}

export const EditProfile = (userData : Props) => {

  const query = `mutation updateUserCall($fullName: String!, $gender: String!, $dob: String!, $country: String!, $userId: String!){
    updateUser(fullName: $fullName, gender: $gender, dob: $dob, country: $country, userId: $userId) {
      statusCode
      message
      data {
        fullName
        dob
        gender
        country
      }
    }
  }`

  const requestData = {
      "userId": userData.userId,
      "fullName": userData.fullName,
      "gender": userData.gender,
      "dob": userData.dob,
      "country": userData.country,
  }

  return async (dispatch: Dispatch<EditProfileAction>) => {
    console.log("Edit address called .....");
    try {
    const data = await postRequestGraphQLAuth(query, requestData, userData.authToken)
    const response = data.updateUser
    console.log("Value of response is", response)
    if(response && response.statusCode === 200){
      dispatch({
        type: EditProfileActionType.EDIT_PROFILE_SUCCESS,
        payload: response.data
      });
    }else{
      dispatch({
        type: EditProfileActionType.EDIT_PROFILE_FAILED,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: EditProfileActionType.EDIT_PROFILE_RESET,
      payload: error,
    });
  }
  };
};

export const ResetEditProfileState = () => {
  return async (dispatch: Dispatch<EditProfileAction>) => {
    dispatch({
      type: EditProfileActionType.EDIT_PROFILE_RESET,
      payload: undefined,
    });
  }
}

