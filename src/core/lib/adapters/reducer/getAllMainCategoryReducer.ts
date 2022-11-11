import { GetAllMainCategoryActionType } from "../../adapters/actionType/getAllMainCategoryActionType";
import { GetAllMainCategoryAction } from "../../useCases/getAllMainCategoryAction";

type UserState = {
  data2: any;
  error2: string | undefined;
};

const initialState = {
  data2: undefined,
  error2: undefined,
};

const getAllMainCategoryReducer = (
  state: UserState = initialState,
  action: GetAllMainCategoryAction
): any => {
  switch (action.type) {
    case GetAllMainCategoryActionType.GET_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        data2: action.payload,
      };
    case GetAllMainCategoryActionType.GET_MAIN_CATEGORY_FAILED:
      return {
        ...state,
        error2: action.payload,
      };
    case GetAllMainCategoryActionType.GET_MAIN_CATEGORY_RESET:
      return {
        ...state,
        data2: action.payload,
        error2: action.payload,
      };
    default:
      return state;
  }
};

export default getAllMainCategoryReducer;
