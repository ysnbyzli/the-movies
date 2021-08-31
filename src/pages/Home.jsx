import React from 'react'
import Category from '../components/Category'
import MovieList from '../components/MovieList'
import NowShowing from '../components/NowShowing'
import Popular from '../components/Popular'

const Home = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-gray-200 transition ease-in-out duration-500">
            <NowShowing />
            <Category />
            <MovieList />
            <Popular />
        </div>
    )
}

export default Home
