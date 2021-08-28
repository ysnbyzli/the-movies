import { CHANGE_CURRENT_CATEGORY } from "../constans"

export const changeCurrentCategory = (category) => {
    return async dispatch => {
        dispatch({
            type: CHANGE_CURRENT_CATEGORY,
            payload: category
        })
    }
}