import { RemoveCardInfoActionType } from "../adapters/actionType/removeCardInfoActionType";

interface RemoveCardInfoSuccess {
  type: RemoveCardInfoActionType.REMOVE_CARD_INFO_SUCCESS;
  payload: any;
}

export interface RemoveCardInfoError {
  readonly type: RemoveCardInfoActionType.REMOVE_CARD_INFO_FAILED;
  payload: any;
}

export interface RemoveCardInfoReset {
  readonly type: RemoveCardInfoActionType.REMOVE_CARD_INFO_RESET;
  payload: any;
}

export type RemoveCardInfoAction =  RemoveCardInfoSuccess | RemoveCardInfoError | RemoveCardInfoReset;
