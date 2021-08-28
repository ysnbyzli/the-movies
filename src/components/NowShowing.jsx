import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import MovieCard from './MovieCard';
import { fetchNowPlayingList } from '../store/actions/nowPlaying'




const NowShowing = () => {

    const movies = useSelector(state => state.nowPlaying.nowPlayingMovies)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNowPlayingList())
    }, [dispatch])

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
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

    return (
        <div className="container mx-auto mt-7">
            <div className="mb-8 pl-9">
                <h3 className="font-semibold text-lg">Now showing</h3>
                <p className="text-gray-600 text-xs">Retro occupy organic, stumptown shabby chic-pour-over roof part.</p>
            </div>
            <Slider {...settings}>
                {movies[0]?.map(movie => (<div><MovieCard movie={movie}></MovieCard></div>))}
            </Slider>
        </div>
    )
}

export default NowShowing
