import AuthActionTypes from "./authActionTypes";

const initialState = {};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AuthActionTypes.AUTH:
            return action.payload;

        default:
            return state;
    }
};

export default authReducer;
