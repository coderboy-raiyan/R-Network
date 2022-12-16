import NotifyTypes from "./notifyActionTypes";

const initialState = {};

function notifyReducer(state = initialState, action: any) {
    switch (action.type) {
        case NotifyTypes.NOTIFY:
            return action.payload;

        default:
            return state;
    }
}

export default notifyReducer;
