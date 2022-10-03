import { EditCardInfoActionType } from "../adapters/actionType/EditCardInfoActionType";

interface EditCardInfoSuccess {
  type: EditCardInfoActionType.EDIT_CARD_INFO_SUCCESS;
  payload: any;
}

export interface EditCardInfoError {
  readonly type: EditCardInfoActionType.EDIT_CARD_INFO_FAILED;
  payload: any;
}

export interface EditCardInfoReset {
  readonly type: EditCardInfoActionType.EDIT_CARD_INFO_RESET;
  payload: any;
}

export type EditCardInfoAction =  EditCardInfoSuccess | EditCardInfoError | EditCardInfoReset;
