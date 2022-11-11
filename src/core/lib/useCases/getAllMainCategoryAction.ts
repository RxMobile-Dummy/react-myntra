import { GetAllMainCategoryActionType } from "../adapters/actionType/getAllMainCategoryActionType";

interface GetAllMainCategory {
  type: GetAllMainCategoryActionType.GET_MAIN_CATEGORY_SUCCESS;
  payload: any;
}

interface GetAllMainCategoryError {
  type: GetAllMainCategoryActionType.GET_MAIN_CATEGORY_FAILED;
  payload: any;
}
interface GetAllMainCategoryReset {
  type: GetAllMainCategoryActionType.GET_MAIN_CATEGORY_RESET;
  payload: any;
}

export type GetAllMainCategoryAction =
  | GetAllMainCategory
  | GetAllMainCategoryError
  | GetAllMainCategoryReset;
