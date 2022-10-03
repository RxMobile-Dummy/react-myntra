import { GetCardInfoListActionType } from "../adapters/actionType/getCardInfoListActionType";

interface GetCardInfoListSuccess {
  type: GetCardInfoListActionType.GET_CARD_INFO_LIST_SUCCESS;
  payload: any;
}

export interface GetCardInfoListError {
  readonly type: GetCardInfoListActionType.GET_CARD_INFO_LIST_FAILED;
  payload: any;
}

export interface GetCardInfoListReset {
  readonly type: GetCardInfoListActionType.GET_CARD_INFO_LIST_RESET;
  payload: any;
}

export type GetCardInfoListAction =  GetCardInfoListSuccess | GetCardInfoListError | GetCardInfoListReset;
