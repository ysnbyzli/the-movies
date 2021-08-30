import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
const MovieCard = ({ movie: { id, original_title, vote_average, vote_count, backdrop_path }, small }) => {

    const [detail, setDetails] = useState([]);

    useEffect(() => {
        fetchMovieDetail();
    }, [])

    const fetchMovieDetail = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR
        `).then(value => setDetails(value.data));
    }

    return (
        <div className="mx-4 h-96 rounded-lg">
            <a href="#">
                <picture>
                    <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="movie" className="object-cover w-full h-3/4 rounded-2xl" />
                </picture>
            </a>
            <div className="flex lg:justify-between pt-5">
                <div className="flex flex-1 flex-col gap-y-1 px-3">
                    <h3 className="font-semibold text-lg">{original_title}</h3>
                    <span className="text-xs font-light tracking-wider text-gray-600 dark:text-gray-300 whitespace-nowrap">{
                        detail?.genres?.map(genre => genre.name + " ")
                    }</span>
                    <span className="flex items-center font-light gap-x-1 text-sm text-gray-500 dark:text-gray-300"> <AiFillStar className="text-yellow-300" /> {vote_average} ({vote_count})</span>
                </div>
                {
                    !small ? (
                        <div className="flex gap-x-3 font-light text-xs text-gray-400 dark:text-gray-300 pt-[6px] invisible xl:visible">
                            <span className="whitespace-nowrap">{detail.runtime} min</span>
                            <span className="whitespace-nowrap">{detail.release_date}</span>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default MovieCard
