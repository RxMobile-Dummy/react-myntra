import { GetAllProductsActionType } from "../adapters/actionType/getAllProductsActionType";

interface GetAllProductsSuccess {
  type: GetAllProductsActionType.GET_ALL_PRODUCTS_SUCCESS;
  payload: any;
}

interface GetAllProductsError {
  type: GetAllProductsActionType.GET_ALL_PRODUCTS_FAILED;
  payload: any;
}

interface GetAllProductsReset {
  type: GetAllProductsActionType.GET_ALL_PRODUCTS_RESET;
  payload: any;
}


export type GetAllProductsAction =  GetAllProductsSuccess | GetAllProductsError | GetAllProductsReset ;

