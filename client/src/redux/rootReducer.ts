import { combineReducers } from "redux";
import counterReducer from "redux/counter/counterReducer";

const rootReducer = combineReducers({ counter: counterReducer });

export default rootReducer;
