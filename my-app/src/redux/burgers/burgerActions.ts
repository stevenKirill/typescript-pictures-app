import { EMethod, EResponseType, TDispatch } from "../types"
import { dispatchAsync } from "../utils"
import { EBurgerActions } from "./enums";


export const burgerActionBuilder = (result: any) => {
    console.log(result,'=> result')
    switch (result.status) {
        case EResponseType.LOADING:
            return {
                type: EBurgerActions.LOAD_BURGER_LOADING,
            };
        case EResponseType.SUCCESS:
            return {
                type: EBurgerActions.LOAD_BURGER_SUCCESS,
                payload: {
                    ...result.data
                }
            };
        case EResponseType.ERROR:
            return {
                type: EBurgerActions.LOAD_BURGER_ERROR,
                payload: {
                    errors: result.error,
                },
            };
        default:
            throw new Error(JSON.stringify(result, undefined, 2));
    }
}

export const loadBurgers = (url: string, method: EMethod, key: string, body?: any) => {
    const headers = new Headers({
        'x-rapidapi-host': 'burgers1.p.rapidapi.com',
        'x-rapidapi-key': `${key}`
      });
    return (dispatch: TDispatch) => {
        return dispatchAsync(dispatch,method,body,headers,url,burgerActionBuilder)
    }
}