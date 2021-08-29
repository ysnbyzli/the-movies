import React from 'react'
import Category from '../components/Category'
import MovieList from '../components/MovieList'
import NowShowing from '../components/NowShowing'

const Home = () => {
    return (
        <div>
            <NowShowing />
            <Category />
            <MovieList />
        </div>
    )
}

export default Home
