import {
  combineReducers,
  createStore,
  applyMiddleware
} from "redux";

import rootReducer from "../rootReduser";

const store = createStore(
  combineReducers({...rootReducer})
);

export default store;
