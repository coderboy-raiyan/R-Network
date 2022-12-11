import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function DataProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}

export type TypeOfDispatch = ReturnType<typeof store.dispatch>;
export type TypeOfState = ReturnType<typeof store.getState>;

export default DataProvider;
