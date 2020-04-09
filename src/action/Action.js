import {ADD_MOVIE, DELETE_MOVIE, SEARCH_MOVIE, EDIT_MOVIE} from "./actionType/ActionType"


export const addMovie = newMovie => {
    return{
        type: ADD_MOVIE,
        payload : newMovie
    };
};

export const deletMovie = id => {
    return {
        type: DELETE_MOVIE, 
        payload: id
    }
}

export const searchMovie = itemm => {
    return {
        type: SEARCH_MOVIE, 
        payload:itemm
    }
}

export const editMovie = (obj,id) => {
    return {
        type: EDIT_MOVIE, 
        payload:{obj,id}
    }
}