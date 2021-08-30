import React from 'react'
import Category from '../components/Category'
import MovieList from '../components/MovieList'
import NowShowing from '../components/NowShowing'
import Popular from '../components/Popular'

const Home = () => {
    return (
        <div>
            <NowShowing />
            <Category />
            <MovieList />
            <Popular />
        </div>
    )
}

export default Home
