import { IAnimal, IInitialAnimals } from '../types';
import { EAnimalActions } from './enums';

interface IAnimalAction {
    type: EAnimalActions,
    payload: any,
}

const initialAnimalsState: IInitialAnimals = {
    loadingAnimals: false,
    errorAnimals: false,
    animalData: {} as IAnimal
};


export const animalReducer = (state = initialAnimalsState, action: IAnimalAction) => {
    switch(action.type) {
        case EAnimalActions.LOAD_CAT_LOADING:
            return {
                ...state,
                loadingAnimals: true,
            }
        case EAnimalActions.LOAD_CAT_SUCCESS:
            return {
                ...state,
                loadingAnimals: false,
                animalData: action.payload,
            }
        case EAnimalActions.LOAD_CAT_ERROR:
            return {
                ...state,
                loadingAnimals: false,
                errorAnimals: true,
            }
        default:
            return state;
    }
}