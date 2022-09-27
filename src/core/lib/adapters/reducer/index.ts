import { combineReducers } from "redux";
import authReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import changePasswordReducer from "./changePasswordReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";

const reducers = combineReducers({
  auth: authReducer,
  registerReducer: registerReducer,
  changePasswordReducer: changePasswordReducer,
  forgotPasswordReducer: forgotPasswordReducer,
  resetPasswordReducer: resetPasswordReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
