import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { Reducer } from "./Reducer";
import { blogReducer } from "./blogs/reducer";
import { thunk } from "redux-thunk";

const root = combineReducers({
  counter: Reducer,
  blog: blogReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = legacy_createStore(root, composeEnhancers(applyMiddleware(thunk)));
