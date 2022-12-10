import { createStore } from "redux";
import counterReducer from "redux/counter/counterReducer";

const store = createStore(counterReducer);

export type TypeOfDispatch = ReturnType<typeof store.dispatch>;
export type TypeOfState = ReturnType<typeof store.getState>;

export default store;
