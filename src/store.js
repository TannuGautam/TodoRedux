import { createStore } from "redux";
import rootReducer from "./poc_todo/reducers";

const store = createStore(rootReducer);

export default store;