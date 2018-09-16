import { createStore } from "redux";
import rootReducer from "../rootRedusers";
const store = createStore(rootReducer);

export default store;
