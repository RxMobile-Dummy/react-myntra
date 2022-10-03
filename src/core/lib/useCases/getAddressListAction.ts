import { GetAddressListActionType } from "../adapters/actionType/getAddressListActionType";

interface GetAddressListSuccess {
  type: GetAddressListActionType.GET_ADDRESS_LIST_SUCCESS;
  payload: any;
}

export interface GetAddressListError {
  readonly type: GetAddressListActionType.GET_ADDRESS_LIST_FAILED;
  payload: any;
}

export interface GetAddressListReset {
  readonly type: GetAddressListActionType.GET_ADDRESS_LIST_RESET;
  payload: any;
}

export type GetAddressListAction =  GetAddressListSuccess | GetAddressListError | GetAddressListReset;
