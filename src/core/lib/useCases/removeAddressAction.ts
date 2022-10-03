import { RemoveAddressActionType } from "../adapters/actionType/removeAddressActionType";

interface RemoveAddressSuccess {
  type: RemoveAddressActionType.REMOVE_ADDRESS_SUCCESS;
  payload: any;
}

export interface RemoveAddressError {
  readonly type: RemoveAddressActionType.REMOVE_ADDRESS_FAILED;
  payload: any;
}

export interface RemoveAddressReset {
  readonly type: RemoveAddressActionType.REMOVE_ADDRESS_RESET;
  payload: any;
}

export type RemoveAddressAction =  RemoveAddressSuccess | RemoveAddressError | RemoveAddressReset;
