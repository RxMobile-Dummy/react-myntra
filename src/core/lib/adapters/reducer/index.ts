import { combineReducers } from "redux";
import authReducer from "./loginReducer";
import registerReducer from "./registerReducer";

const reducers = combineReducers({
  auth: authReducer,
  registerReducer: registerReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
