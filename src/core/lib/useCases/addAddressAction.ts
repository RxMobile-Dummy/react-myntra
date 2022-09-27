import { AddAddressActionType } from "../adapters/actionType/addAddressActionType";

interface AddAddressSuccess {
  type: AddAddressActionType.ADD_ADDRESS_SUCCESS;
  payload: any;
}

export interface AddAddressError {
  readonly type: AddAddressActionType.ADD_ADDRESS_FAILED;
  payload: any;
}

export type AddAddressAction =  AddAddressSuccess | AddAddressError;
