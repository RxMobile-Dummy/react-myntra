import { GetCategoryListMenu } from "../actionType/getCategoryListActionType";
import { getCategoryListAction } from "../../useCases/getCategoryListAction";

type UserState = {
  categoryList : any;
  categoryError: string | undefined;
};

const initialState = {
    categoryList: undefined,
    categoryError: undefined,
};

const getCategoryListReducer = (state: UserState = initialState, action: getCategoryListAction): any => {
  switch (action.type) {
    case GetCategoryListMenu.GET_ALL_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categoryList: action.payload,
      };
    case GetCategoryListMenu.GET_ALL_CATEGORY_LIST_FAILED:
        return {
          ...state,
          categoryError: action.payload,
        };
    case GetCategoryListMenu.GET_ALL_CATEGORY_LIST_RESET:
        return {
          ...state,
          categoryList: action.payload,
          categoryError: action.payload,
        };
    default:
      return state;
  }
};

export default getCategoryListReducer;
