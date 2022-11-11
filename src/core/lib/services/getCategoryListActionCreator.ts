import { Dispatch } from "redux";
import { GetCategoryListMenu } from "../adapters/actionType/getCategoryListActionType";
import { getCategoryListAction } from "../useCases/getCategoryListAction";
import { postRequestGraphQLAuth } from "../network/ApiCall";

interface Props {
  authToken: string;
}

export const GetCategoryListActionCreator = (address: Props) => {
  const query = `query GetCategoryMenuList {
    getCategoryMenuList {
      data {
        mainCategory
        category {
          Categoryname
          _id
        }
        _id
      }
      message
      statusCode
    }
  }`;

  const requestData = {
    authToken: address.authToken,
  };

  return async (dispatch: Dispatch<getCategoryListAction>) => {
    // console.log("Get cartegory list called .....");
    try {
      const data = await postRequestGraphQLAuth(
        query,
        requestData,
        address.authToken
      );
      const response = data.getCategoryMenuList;
      // console.log("Value of response is", response)
      if (
        (response && response.statusCode === 200) ||
        response.statusCode === 201
      ) {
        dispatch({
          type: GetCategoryListMenu.GET_ALL_CATEGORY_LIST_SUCCESS,
          payload: response.data,
        });
        return { status: true, resultData: response.data };
      } else {
        dispatch({
          type: GetCategoryListMenu.GET_ALL_CATEGORY_LIST_FAILED,
          payload: response.message,
        });
        return { status: false, resultData: response.message };
      }
    } catch (error) {
      dispatch({
        type: GetCategoryListMenu.GET_ALL_CATEGORY_LIST_FAILED,
        payload: error,
      });
      return { status: false, resultData: error };
    }
  };
};
