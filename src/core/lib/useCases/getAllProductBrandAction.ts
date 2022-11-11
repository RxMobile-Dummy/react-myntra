import { GetAllProductBrand } from "../adapters/actionType/getAllProductBrandActionType";

export interface GetAllProductBrandSuccess {
  type: GetAllProductBrand.GET_ALL_BRAND_SUCCESS;
  payload: any;
}

export interface GetAllProductBrandError {
  readonly type: GetAllProductBrand.GET_ALL_BRAND_FAILED;
  payload: any;
}

export interface GetAllProductBrandReset {
  readonly type: GetAllProductBrand.GET_ALL_BRAND_RESET;
  payload: any;
}

export type getAllProductBrandAction =  GetAllProductBrandSuccess | GetAllProductBrandError | GetAllProductBrandReset;