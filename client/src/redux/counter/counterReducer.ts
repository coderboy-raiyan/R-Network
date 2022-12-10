import { AllCounterTypes } from "./counterActions";
import CounterActionTypes from "./counterActionTypes";

interface InitialState {
    value: number;
}

const initialState: InitialState = {
    value: 0,
};

const counterReducer = (state: InitialState = initialState, action: AllCounterTypes) => {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        case CounterActionTypes.DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };

        default:
            return state;
    }
};

export type CounterReducerType = ReturnType<typeof counterReducer>;
export default counterReducer;
