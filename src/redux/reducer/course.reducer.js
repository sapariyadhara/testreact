import * as ActionTypes from '../ActionTypes'

const init = {
    loading : false ,
    course : [],
    error : null 
}

export const courseReducer = (state = init , action) => {
    // console.log(action , state);
    switch(action.type) {
        case ActionTypes.GET_COURSE :
            return {
                ...state ,
                course : action.payload
            }
            case ActionTypes.ADD_COURSE :
            return {
                ...state ,
                course : state.course.concat(action.payload)
            }
        default :
        return state
    }
}