import { combineReducers } from "redux";
import counterReducer from "redux/counter/counterReducer";
import authReducer from "./auth/authReducer";
import notifyReducer from "./notify/notifyActions";

const rootReducer = combineReducers({
    counter: counterReducer,
    notify: notifyReducer,
    auth: authReducer,
});

export default rootReducer;
