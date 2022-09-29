import { EditAddressActionType } from "../adapters/actionType/editAddressActionType";

interface EditAddressSuccess {
  type: EditAddressActionType.EDIT_ADDRESS_SUCCESS;
  payload: any;
}

export interface EditAddressError {
  readonly type: EditAddressActionType.EDIT_ADDRESS_FAILED;
  payload: any;
}

export type EditAddressAction =  EditAddressSuccess | EditAddressError;
