import React from 'react'
import CategoryItem from './CategoryItem'

const categories = [
    { id: 28, name: "Aksiyon" },
    { id: 12, name: "Macera" },
    { id: 16, name: "Animasyon" },
    { id: 35, name: "Komedi" },
    { id: 18, name: "Drama" },
]


const Category = () => {


    return (
        <>
            <div className="container mx-auto mt-6">
                <h2 className="font-semibold text-2xl pl-9">Kategoriler</h2>
                <div className="flex items-center font-light gap-x-4 mt-4 pl-3">
                    {
                        categories.map(category => (
                            <CategoryItem key={category.id} category={category} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Category
