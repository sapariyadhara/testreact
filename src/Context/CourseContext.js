import { createContext, useReducer } from "react"
import { CounterReducer } from "./reducer/course1.reducer"
import { GET_COURSES } from "./ActionType"

export const CourseContext = createContext()

const init = {
    loading: false,
    course: [],
    error: null
}

export const CourseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CounterReducer, init)

    const getDatas = (init) => {
      
            fetch("http://localhost:3004/course")
                .then((response) => response.json())
                .then((data) => dispatch({ type: GET_COURSES, payload: data }))
                .catch((error) => console.log(error))
        
    }
    return (
        <CourseContext.Provider
            value={{
                ...state,
                getDatas
            }}
        >
            {children}
        </CourseContext.Provider>
    )
}