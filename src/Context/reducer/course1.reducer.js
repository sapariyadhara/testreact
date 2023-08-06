import { GET_COURSES } from "../ActionType";


export const CounterReducer = (state , action) => {
    console.log(action);
    switch(action.type){
        case GET_COURSES :
            return{
                ...state,
                course: action.payload
            }
        default :
        return state
    }
}