import { combineReducers } from "redux";
import { animalReducer } from "./animals/animalReducer";

export const rootReducer = combineReducers({
    animals: animalReducer,
}) 