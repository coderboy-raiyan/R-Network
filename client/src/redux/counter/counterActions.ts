import CounterActionTypes from "./counterActionTypes";

export interface Increment {
    type: CounterActionTypes.INCREMENT;
    payload: Number;
}
export interface IDecrement {
    type: CounterActionTypes.DECREMENT;
    payload: Number;
}

export const increment = (payload: Increment) => ({
    type: CounterActionTypes.INCREMENT,
    payload,
});
export const decrement = (payload: IDecrement) => ({
    type: CounterActionTypes.DECREMENT,
    payload,
});

export type AllCounterTypes = Increment | IDecrement;
