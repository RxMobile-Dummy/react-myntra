import { Dispatch } from "redux";
import { GetAllProductBrand } from "../adapters/actionType/getAllProductBrandActionType";
import { getAllProductBrandAction } from "../useCases/getAllProductBrandAction";
import { postRequestGraphQLAuth } from "../network/ApiCall";

interface Props {
  authToken: string;
}

export const GetAllProductBrandActionCreator = (address: Props) => {

  const query = `query Data {
    getAllProductBrands {
      data {
        brandname
        _id
      }
      statusCode
      message
    }
  }`

  const requestData = {
    authToken: address.authToken
  }

  return async (dispatch: Dispatch<getAllProductBrandAction>) => {
    console.log("Get address list called .....");
    try {
      const data = await postRequestGraphQLAuth(query, requestData, address.authToken)
      const response = data.getAllProductBrands
      console.log("Value of response is", response.data)
      if (response && response.statusCode === 200) {
        dispatch({
          type: GetAllProductBrand.GET_ALL_BRAND_SUCCESS,
          payload: response.data
        });
        return { status : true, resultData : response.data }
      } else {
        dispatch({
          type: GetAllProductBrand.GET_ALL_BRAND_FAILED,
          payload: response.message,
        });
        return { status : false, resultData : response.data }
      }
    } catch (error) {
      dispatch({
        type: GetAllProductBrand.GET_ALL_BRAND_FAILED,
        payload: error,
      });
      return { status : false, resultData : error }
    }
  };
};


