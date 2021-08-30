import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Link, useParams } from 'react-router-dom'
import { GoMute, GoUnmute } from 'react-icons/go'
import { BsPlayFill } from 'react-icons/bs'
import { AiOutlineArrowUp, AiOutlineArrowLeft } from 'react-icons/ai'

const MovieDetail = () => {

    const [videos, setVideos] = useState(null);
    const [details, setDetails] = useState([]);
    const [isMuted, setIsMuted] = useState(true);
    const [isWatching, setIsWatching] = useState(false);

    const { id } = useParams();



    useEffect(() => {
        fetchMovieVideo()
        fetchMovieDetail()
    }, [id])

    const fetchMovieVideo = async () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR
            `).then(value => setVideos(value.data.results[0]?.key))
    }

    const fetchMovieDetail = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR
        `).then(value => setDetails(value.data));
    }

    const handleChangeMute = () => {
        setIsMuted(!isMuted);
    }

    const handleChangeIsWatching = () => {
        setIsWatching(!isWatching);
    }

    return (
        <div className="bg-gray-900 relative" style={{ height: "100vh" }}>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videos}`}
                width="100%"
                height="100%"
                loop={true}
                muted={isMuted}
                playing={true}
            />
            {
                isWatching ? (
                    <span
                        className="animate-bounce bg-gray-900 text-white inline-block p-3 rounded-full absolute bottom-14 left-1/2 transform -translate-x-1/2 cursor-pointer"
                        onClick={() => handleChangeIsWatching()}
                    >
                        <AiOutlineArrowUp size={20} />
                    </span>
                ) : (
                    <div className={videos ? "absolute inset-0 flex items-center justify-center text-white px-48" : "absolute inset-0"}>
                        {
                            videos ? (<div className="w-1/2 items-center justify-center hidden lg:flex">
                                <img className="w-64 h-96 object-cover rounded-2xl " src={`https://image.tmdb.org/t/p/original//${details.poster_path}`} alt="movie" />
                            </div>) : (
                                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original//${details.backdrop_path}`} alt="movie" />
                            )
                        }

                        <div className={videos ? "w-full min-w-[450px] h-1/2" : "absolute top-0 right-0 flex justify-center px-4 text-white w-[700px] flex-col bg-black bg-opacity-70 h-full"}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="tracking-wider font-bold text-2xl">
                                        {details.original_title}
                                    </h2>
                                    <ul className="flex text-xs gap-x-2">
                                        {details.genres?.map(genre => (
                                            <li>• {genre.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <span className="pr-10 text-xs">
                                    {details.release_date}
                                </span>
                            </div>
                            {
                                details.overview && (<p className="mt-10">
                                    <h2 className="text-lg mb-2">ÖZET</h2>
                                    {details.overview}
                                </p>)
                            }


                            {
                                videos && (
                                    <ul className="pt-5 flex items-center gap-5">
                                        <li className="cursor-pointer">
                                            <span className="bg-gray-900 inline-block p-3 rounded-full" onClick={() => handleChangeIsWatching()}>{
                                                <BsPlayFill size={20} />
                                            }</span>
                                        </li>
                                        <li className="cursor-pointer" onClick={() => handleChangeMute()}>
                                            <span className="bg-gray-900 inline-block p-3 rounded-full">{
                                                isMuted ? (<GoMute size={20} />) : (<GoUnmute size={20} />)
                                            }</span>
                                        </li>
                                    </ul>
                                )
                            }

                        </div>
                    </div>
                )
            }
            <Link to="/" className="bg-gray-900 text-white inline-block p-3 rounded-full absolute top-14 left-14 transform -translate-x-1/2 cursor-pointer">
                <AiOutlineArrowLeft size={20} />
            </Link>
        </div>
    )
}

export default MovieDetail
