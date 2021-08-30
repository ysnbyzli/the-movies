import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import MovieCard from './MovieCard';
import { fetchNowPlayingList } from '../store/actions/nowPlaying'


const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
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


const NowShowing = () => {

    const movies = useSelector(state => state.nowPlaying.nowPlayingMovies)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNowPlayingList())
    }, [dispatch])

    return (
        <div className="container mx-auto pt-7 h-[530px]">
            <div className="mb-8 pl-9 flex">
                <h2 className="font-semibold text-2xl">Sinemalarda</h2>
            </div>
            <Slider {...settings} className="h-full">
                {movies[0]?.map(movie => (<div key={movie.id}><MovieCard movie={movie}></MovieCard></div>))}
            </Slider>
        </div>
    )
}

export default NowShowing
