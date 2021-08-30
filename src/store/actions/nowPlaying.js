import axios from "axios";
import { FETCH_MOVIES_NOW_PLAYING } from "../constans";

export const fetchNowPlayingList = () => {
    return async dispatch => {
        await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`).then(value => dispatch({
            type: FETCH_MOVIES_NOW_PLAYING,
            payload: value.data.results
        }))
    }
}

/*https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1 */