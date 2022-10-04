import { EditProfileActionType } from "../adapters/actionType/editProfileActionType";

interface EditProfileSuccess {
  type: EditProfileActionType.EDIT_PROFILE_SUCCESS;
  payload: any;
}

export interface EditProfileError {
  readonly type: EditProfileActionType.EDIT_PROFILE_FAILED;
  payload: any;
}

export interface EditProfileReset {
  readonly type: EditProfileActionType.EDIT_PROFILE_RESET;
  payload: any;
}

export type EditProfileAction =  EditProfileSuccess | EditProfileError | EditProfileReset;
