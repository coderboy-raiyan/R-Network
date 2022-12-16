import NotifyTypes from "redux/notify/notifyActionTypes";
import { TypeOfDispatch } from "redux/store/store";

export interface ILogin {
    email: string;
    password: string;
}

export function login(payload: ILogin): any {
    return async function (dispatch: TypeOfDispatch) {
        try {
            dispatch({ type: NotifyTypes.NOTIFY, payload: { loading: true } });
        } catch (error) {
            console.log(error);
        }
    };
}
