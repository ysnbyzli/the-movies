import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentCategory } from '../store/actions/movie';

const CategoryItem = ({ category: { id, name } }) => {


    const currentCategory = useSelector(state => state.movie.currentCategory)

    const dispatch = useDispatch();

    const handleChangeCategory = (id) => {
        dispatch(changeCurrentCategory(id))
    }

    return (
        <span className={`py-1 px-4 cursor-pointer hover:text-red-400 ${currentCategory === id ? "category-active" : ""}`} onClick={() => handleChangeCategory(id)}>{name}</span>
    )
}

export default CategoryItem
