import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { IInitialState, IAnimal } from "./types";

const initial: IInitialState = {
    loadAnimals: false,
    errorAnimals: {
        code: '',
        message: '',
    },
    catData: {} as ICat
};

const store = createStore(initial,rootReducer);

export default store;