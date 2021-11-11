import { EMethod, EResponseType, TDispatch } from "../types";
import { EAnimalActions } from "./enums";
import { dispatchAsync } from "../utils";

const loadAnimalsActionBuilder = (result: any) => {
    switch (result.status) {
        case EResponseType.LOADING:
            return {
                type: EAnimalActions.LOAD_CAT_LOADING,
            };
        case EResponseType.SUCCESS:
            return {
                type: EAnimalActions.LOAD_CAT_SUCCESS,
                payload: {
                    ...result.data
                }
            };
        case EResponseType.ERROR:
            return {
                type: EAnimalActions.LOAD_CAT_ERROR,
                payload: {
                    errors: result.error,
                },
            };
        default:
            throw new Error(JSON.stringify(result, undefined, 2));
    }
};

/** Асинхронный экшн. */
export const loadAnimals = (url: string,method: EMethod,key: string,body?: any) => {
    const headers = new Headers({
        'x-rapidapi-host': 'mlemapi.p.rapidapi.com',
        'x-rapidapi-key': `${key}`
    });
    return (dispatch: TDispatch) => {
        return dispatchAsync(dispatch,method,body,headers,url,loadAnimalsActionBuilder);
    };
};