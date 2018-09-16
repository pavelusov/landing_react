import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import persistState from 'redux-session-manager';
import rootReducer from "../rootReduser";

const middlewares = [];

const enhancer = compose(
  applyMiddleware(...middlewares),
  persistState({
    name: "services-store"
  })
);

const store = createStore(
  rootReducer,
  {},
  enhancer
);

export default store;
