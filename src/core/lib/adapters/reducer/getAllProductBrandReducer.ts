import { GetAllProductBrand } from "../actionType/getAllProductBrandActionType";
import { getAllProductBrandAction } from "../../useCases/getAllProductBrandAction";

type UserState = {
  productBrand : any;
  brandError: string | undefined;
};

const initialState = {
    productBrand: undefined,
    brandError: undefined,
};

const getAllProductBrandReducer = (state: UserState = initialState, action: getAllProductBrandAction): any => {
  switch (action.type) {
    case GetAllProductBrand.GET_ALL_BRAND_SUCCESS:
      return {
        ...state,
        productBrand: action.payload,
      };
    case GetAllProductBrand.GET_ALL_BRAND_FAILED:
        return {
          ...state,
          brandError: action.payload,
        };
    case GetAllProductBrand.GET_ALL_BRAND_RESET:
        return {
          ...state,
          productBrand: action.payload,
          brandError: action.payload,
        };
    default:
      return state;
  }
};

export default getAllProductBrandReducer;
