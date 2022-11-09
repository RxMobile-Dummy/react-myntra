import { Dispatch } from "redux";
import { GetAllProductsActionType } from "../adapters/actionType/getAllProductsActionType";
import { GetAllProductsAction } from "../useCases/GetAllProductsAction";
import { postRequestGraphQL, postRequestGraphQLAuth } from "../network/ApiCall";

interface Props {
    authToken: string
}

export const GetAllProducts = (user: Props) => {

    const query = `query GetAllProducts {
    getAllProducts {
      statusCode
      message
      data {
        _id
        Productname
        Returnable
        Productdetails
        ProductImage
        Deliverable
        Maincategory {
            _id
            mainCategory
          }
        Category {
            _id
          Categoryname
        }
        Brand {
            _id
          brandname
        }
      }
    }
  }`

    const requestData = {
        authToken: user.authToken
    }

    return async (dispatch: Dispatch<GetAllProductsAction>) => {
        console.log("Get all products dispatch called .....", requestData);
        try {
            const data = await postRequestGraphQLAuth(query, requestData, user.authToken)
            const response = data.getAllProducts
            console.log("Value of getpoducts response is", response)
            if ((response && response.statusCode === 200) ||
                response.statusCode === 201) {
                dispatch({
                    type: GetAllProductsActionType.GET_ALL_PRODUCTS_SUCCESS,
                    payload: response.data
                });
            } else {
                dispatch({
                    type: GetAllProductsActionType.GET_ALL_PRODUCTS_FAILED,
                    payload: response.message,
                });
            }
        } catch (error) {
            dispatch({
                type: GetAllProductsActionType.GET_ALL_PRODUCTS_FAILED,
                payload: error,
            });
        }
    };
};

export const ResetGetAllProductsState = () => {
    return async (dispatch: Dispatch<GetAllProductsAction>) => {
        dispatch({
            type: GetAllProductsActionType.GET_ALL_PRODUCTS_RESET,
            payload: undefined,
        });
    }
}
