import { AddCardInfoActionType } from "../adapters/actionType/addCardInfoActionType";

interface AddCardInfoSuccess {
  type: AddCardInfoActionType.ADD_CARD_INFO_SUCCESS;
  payload: any;
}

export interface AddCardInfoError {
  readonly type: AddCardInfoActionType.ADD_CARD_INFO_FAILED;
  payload: any;
}

export interface AddCardInfoReset {
  readonly type: AddCardInfoActionType.ADD_CARD_INFO_RESET;
  payload: any;
}

export type AddCardInfoAction =  AddCardInfoSuccess | AddCardInfoError | AddCardInfoReset;
