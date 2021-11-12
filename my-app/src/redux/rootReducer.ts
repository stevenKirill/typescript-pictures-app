import { combineReducers } from "redux";
import { animalReducer } from "./animals/animalReducer";
import { burgerReducer } from "./burgers/burgerReducer";

export const rootReducer = combineReducers({
    animals: animalReducer,
    burger: burgerReducer,
}) 