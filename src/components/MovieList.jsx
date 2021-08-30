import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import { changeCurrentCategoryMovies } from '../store/actions/movie'
import MovieCard from './MovieCard'

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

const MovieList = () => {

    const currentCategoryId = useSelector(state => state.movie.currentCategory)
    const currentCategoryMovies = useSelector(state => state.movie.currentCategoryMovies)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeCurrentCategoryMovies(currentCategoryId));
    }, [currentCategoryId, dispatch])



    return (
        <div className="container mx-auto py-7 h-[500px]">
            <Slider {...settings} className="h-full">
                {currentCategoryMovies && currentCategoryMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} small />
                ))}
            </Slider>
        </div>
    )
}

export default MovieList
