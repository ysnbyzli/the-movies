/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import { CHANGE_CURRENT_CATEGORY } from "../constans";


const initialState = {
    currentCategory: 28
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        default:
            return state;
    }
}