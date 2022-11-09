import { GetAllProductsActionType } from "../actionType/getAllProductsActionType";
import { GetAllProductsAction } from "../../useCases/getAllProductsAction";


type UserState = {
  getprData: any;
  getprError: string | undefined;
};

const initialState = {
    getprData: undefined,
    getprError: undefined,
    getprState : true
};

const getAllProductsReducer = (state: UserState = initialState, action: GetAllProductsAction): any => {
  switch (action.type) {
    case GetAllProductsActionType.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        getprData: action.payload,
      };
    case GetAllProductsActionType.GET_ALL_PRODUCTS_FAILED:
        return {
          ...state,
          getprError: action.payload,
        };
    case GetAllProductsActionType.GET_ALL_PRODUCTS_RESET:
        return {
          ...state,
          getprData: action.payload,
          getprError: action.payload,
      };

    default:
      return state;
  }
};

export default getAllProductsReducer;
