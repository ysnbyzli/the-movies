import React from 'react'
import CategoryItem from './CategoryItem'

const categories = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 18, name: "Drama" },
]


const Category = () => {


    return (
        <div>
            <div className="container mx-auto mt-5">
                <h2 className="font-semibold text-2xl pl-9">Categories</h2>
                <div className="flex items-center font-light gap-x-4 mt-4 pl-3">
                    {
                        categories.map(category => (
                            <CategoryItem key={category.id} category={category} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Category
