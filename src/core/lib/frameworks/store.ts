import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../adapters/reducer";

export const store = createStore(reducers, applyMiddleware(thunk));
