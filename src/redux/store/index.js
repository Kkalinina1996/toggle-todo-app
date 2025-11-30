// redux/store/index.js

import { createStore } from "redux";
import todoReducer from "./reducer.js";

// Izveidojam store, nododot tam reducer
const store = createStore(todoReducer);

export default store;
