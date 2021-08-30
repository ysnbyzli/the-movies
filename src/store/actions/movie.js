import axios from "axios"
import { CHANGE_CURRENT_CATEGORY, CHANGE_CURRENT_CATEGORY_MOVIES, FETCH_MOVIES_BY_POPULAR } from "../constans"

export const changeCurrentCategory = (category) => {
    return async dispatch => {
        dispatch({
            type: CHANGE_CURRENT_CATEGORY,
            payload: category
        })
    }
}

export const changeCurrentCategoryMovies = (category_id) => {
    return async dispatch => {
        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${category_id}`).then(value => dispatch({
            type: CHANGE_CURRENT_CATEGORY_MOVIES,
            payload: value.data.results
        }))
    }
}

export const fecthMoviesByPopular = () => {
    return async dispatch => {
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR&page=1`).then(value => dispatch({
            type: FETCH_MOVIES_BY_POPULAR,
            payload: value.data.results
        }))
    }
}