import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fecthMoviesByPopular } from '../store/actions/movie';
import MovieCard from './MovieCard';

const Popular = () => {

    const movies = useSelector(state => state.movie.popularMovies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fecthMoviesByPopular())
    }, [dispatch])

    return (
        <div className="container mx-auto pb-9">
            <h2 className="font-semibold text-2xl pl-9">Popüler</h2>
            <ul className="pt-4 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-5">
                {
                    movies && movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} small />
                    ))
                }
            </ul>
        </div>
    )
}

export default Popular
