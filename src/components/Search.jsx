import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Search = () => {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([])


    useEffect(() => {
        if (search && search.length >= 3) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
                .then(value => setMovies(value.data.results))
        } else {
            setMovies([])
        }
    }, [search])


    return (
        <div className="pt-2 relative w-56 lg:w-96 text-gray-600 pb-2">
            <input className={`border-2 w-full dark:bg-gray-700 dark:text-gray-100 dark:border-gray-500 border-gray-300 bg-white h-10 px-5 pr-16 ${search ? "rounded-t-lg" : "rounded-lg"} text-sm focus:outline-none`}
                type="search" name="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <BiSearch size={20} className="dark:text-white" />
            </button>
            <ul className={`z-20 absolute w-full max-h-72 overflow-y-scroll bg-gray-100 dark:bg-gray-700 dark:text-white px-1 dark:border-gray-600 ${search ? "border-2 rounded-b-lg" : ""}`}>
                {
                    movies && movies.map(movie => (
                        <li key={movie.id} className="py-2 cursor-pointer">
                            <Link to={`movie/${movie.id}`} className="flex items-center">
                                <div className="w-1/4">
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className="w-full h-10 object-cover rounded-lg" />
                                </div>
                                <div className="pl-5 flex-1">
                                    <h2>{movie.title}</h2>
                                    <span className="text-sm">{movie.release_date}</span>
                                </div>
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Search
