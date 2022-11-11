import { GetCategoryListMenu } from "../adapters/actionType/getCategoryListActionType";

export interface GetCategoryListSuccess {
  type: GetCategoryListMenu.GET_ALL_CATEGORY_LIST_SUCCESS;
  payload: any;
}

export interface GetCategoryListError {
  readonly type: GetCategoryListMenu.GET_ALL_CATEGORY_LIST_FAILED;
  payload: any;
}

export interface GetCategoryListReset {
  readonly type: GetCategoryListMenu.GET_ALL_CATEGORY_LIST_RESET;
  payload: any;
}

export type getCategoryListAction =  GetCategoryListSuccess | GetCategoryListError | GetCategoryListReset;