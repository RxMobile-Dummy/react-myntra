import { EditProfileActionType } from "../actionType/editProfileActionType";
import { EditProfileAction } from "../../useCases/editProfileAction";


type UserState = {
  editProfileData: any;
  editProfileError: string | undefined;
};

const initialState = {
  editProfileData: undefined,
  editProfileError: undefined,
};

const editProfileReducer = (state: UserState = initialState, action: EditProfileAction): any => {
  console.log("action payload:", action.payload);
  switch (action.type) {
    case EditProfileActionType.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfileData: action.payload,
      };
    case EditProfileActionType.EDIT_PROFILE_FAILED:
        return {
          ...state,
          editProfileError: action.payload,
        };
    case EditProfileActionType.EDIT_PROFILE_RESET:
        return {
          ...state,
          editProfileData: action.payload,
          editProfileError: action.payload,
        };
    default:
      return state;
  }
};

export default editProfileReducer;
