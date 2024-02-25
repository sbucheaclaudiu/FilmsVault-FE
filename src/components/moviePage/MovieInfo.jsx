import React, { useState } from 'react'
import CastItem from './CastItem'
import "../styleComponents.css"
import VideoItem from './VideoItem'

function MovieInfo(props) {

    return (
        <div className='mt-[-80px] z-20 relative'>
            <div className='text-gray-400 text-md font-semibold px-8 text-center'>
                {props.movie.overview}
            </div>

            <div className='text-white text-3xl font-semibold px-8 pt-16 pb-4'>
                <div className='flex items-center'>
                    <div className='border-r-8 border-rose-600 h-6 mr-2'></div>
                    <div className='text-white text-3xl font-semibold'>
                        VIDEOS
                    </div>
                </div>
            </div>

            <div className='movie-app mr-8'>
                <div className='row'>
                    {props.video.map((video) => (
                        <VideoItem
                            key={video.videoId}
                            video={video}
                        />
                    ))}
                </div>
            </div>

            <div className='text-white text-3xl font-semibold pb-4 px-8 pt-20'>
                <div className='flex items-center'>
                    <div className='border-r-8 border-rose-600 h-6 mr-2'></div>
                    <div className='text-white text-3xl font-semibold'>
                        CAST
                    </div>
                    <div className='text-white text-xl font-semibold ml-4'>
                        ({props.cast.length})
                </div>
                </div>
            </div>
            <div className='movie-app mr-8 pb-16'>
                <div className='row'>
                    {props.cast.map((person) => (
                        <CastItem
                            key={person.personId}
                            person={person}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default MovieInfo