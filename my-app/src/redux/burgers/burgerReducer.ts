import { IInitialBurgers } from "../types";
import { EBurgerActions } from "./enums";

interface IBurgerAction {
    type: EBurgerActions,
    payload: any,
}

const initialBurger: IInitialBurgers = {
    loadBurger: false,
    errorBurger: false,
    burgersData: [],
};

export const burgerReducer = (state = initialBurger, action: IBurgerAction) => {
    switch(action.type) {
        case EBurgerActions.LOAD_BURGER_LOADING:
            return {
                ...state,
                loadBurger: true,
            }
        case EBurgerActions.LOAD_BURGER_SUCCESS:
            return {
                ...state,
                loadBurger: false,
                burgersData: Object.values(action.payload)
            }
        case EBurgerActions.LOAD_BURGER_ERROR:
            return {
                ...state,
                loadBurger: false,
                errorBurger: true,
            }
        default:
            return state;
    }
};