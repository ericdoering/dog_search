import { ActionType } from "../types/reducer";
import { Dispatch } from "redux";

export const renderBreed = (value: string, dispatch: Dispatch<any>) => {
    dispatch({
        type: ActionType.BREED,
        payload: value
    });
    dispatch({
        type: ActionType.SUB_BREED,
        payload: "all"
    })
};

export const renderSubBreed = (value: string, dispatch: Dispatch<any>) => {
    dispatch({
        type: ActionType.SUB_BREED,
        payload: value
    })
};

export const renderNumber = (value: string, dispatch: Dispatch<any>) => {
    dispatch({
        type: ActionType.NUMBER,
        payload: value
    })
};