import { combineReducers } from "redux";
import nowPlaying from './nowPlaying'
import movieReducer from "./movieReducer";


export default combineReducers({
    nowPlaying,
    movie: movieReducer
})