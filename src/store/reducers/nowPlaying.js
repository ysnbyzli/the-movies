/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import { FETCH_MOVIES_NOW_PLAYING } from "../constans";

const initialState = {
    nowPlayingMovies: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_NOW_PLAYING:
            return {
                nowPlayingMovies: [
                    action.payload
                ]
            }
        default:
            return state;
    }
}