import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducer"
import thunk from "redux-thunk"

export const configurStore = () => {
    let store = createStore(rootReducer , applyMiddleware(thunk))

    return store
}