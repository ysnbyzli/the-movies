import { combineReducers } from "redux";
import nowPlaying from './nowPlaying'
import categoryReducer from "./categoryReducer";


export default combineReducers({
    nowPlaying,
    category: categoryReducer
})