import { EResponseType, TDispatch } from "../types";
import { EAnimalActions } from "./enums";

const loadAnimalsActionBuilder = (result: any) => {
    console.log(result,'=> result');
    switch (result.status) {
        case EResponseType.LOADING:
            return {
                type: EAnimalActions.LOAD_CAT_LOADING,
            };
        case EResponseType.SUCCESS:
            return {
                type: EAnimalActions.LOAD_CAT_SUCCESS,
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
export const loadAnimals = (body: any, apiMethod: URL) => {
    const data = {};
    return (dispatch: TDispatch) => {
        // TODO вернуть обертку над пост запросом
    };
};