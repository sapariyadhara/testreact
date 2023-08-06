import * as ActionTypes from '../ActionTypes'

export const getData = () => (dispatch) => {
    try{
        fetch("http://localhost:3004/course")
            .then((response) => response.json())
            .then((data) => dispatch({type : ActionTypes.GET_COURSE , payload : data}))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const addData = (data) => (dispatch) => {
    try{
        fetch("http://localhost:3004/course" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({type : ActionTypes.ADD_COURSE , payload : data}))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

// export const deleteData = (data) => (dispatch) => {

// }
