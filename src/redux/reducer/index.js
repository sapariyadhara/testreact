import { combineReducers } from "redux";
import { courseReducer } from "./course.reducer";

export const rootReducer = combineReducers({
    course : courseReducer
}) 