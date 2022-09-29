import { combineReducers } from "redux";
import authReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import changePasswordReducer from "./changePasswordReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import addAddressReducer from "./addAddressReducer";
import getAddressListReducer from "./getAddressListReducer";
import removeAddressReducer from "./removeAddressReducer";
import editAddressReducer from "./editAddressReducer";
import addCardInfoReducer from "./addCardInfoReducer";

const reducers = combineReducers({
  auth: authReducer,
  registerReducer: registerReducer,
  changePasswordReducer: changePasswordReducer,
  forgotPasswordReducer: forgotPasswordReducer,
  resetPasswordReducer: resetPasswordReducer,
  addAddressReducer: addAddressReducer,
  getAddressListReducer: getAddressListReducer,
  removeAddressReducer: removeAddressReducer,
  editAddressReducer: editAddressReducer,
  addCardInfoReducer: addCardInfoReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
