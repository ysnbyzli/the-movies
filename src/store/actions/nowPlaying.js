import { FETCH_MOVIES_NOW_PLAYING } from "../constans";

export const fetchNowPlayingList = () => {
    return async dispatch => dispatch({ type: FETCH_MOVIES_NOW_PLAYING, payload: "test" })
}