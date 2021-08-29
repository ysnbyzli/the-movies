/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import { CHANGE_CURRENT_CATEGORY, CHANGE_CURRENT_CATEGORY_MOVIES } from "../constans";


const initialState = {
    currentCategory: 28,
    currentCategoryMovies: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        case CHANGE_CURRENT_CATEGORY_MOVIES:
            return {
                ...state,
                currentCategoryMovies: action.payload
            }
        default:
            return state;
    }
}