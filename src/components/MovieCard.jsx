import React from 'react'
import { AiFillStar } from 'react-icons/ai'
const MovieCard = ({ movie: { original_title, vote_average, vote_count, backdrop_path } }) => {


    return (
        <div className="mx-4 h-96 rounded-lg">
            <a href="#">
                <picture>
                    <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="movie" className="object-cover w-full h-3/4 rounded-2xl" />
                </picture>
            </a>
            <div className="flex justify-between pt-5 px-3 invisible lg:visible">
                <div className="flex flex-col gap-y-1">
                    <h3 className="font-semibold text-lg">{original_title}</h3>
                    <span className="text-sm text-gray-500">2019 . Action | Fantasy</span>
                    <span className="flex items-center gap-x-1 text-sm text-gray-500"> <AiFillStar className="text-yellow-300" /> {vote_average} ({vote_count})</span>
                </div>
                <div className="flex gap-x-2 text-xs text-gray-400 pt-[6px]">
                    <span className="whitespace-nowrap">143 min</span>
                    <span className="whitespace-nowrap">PG-13</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
