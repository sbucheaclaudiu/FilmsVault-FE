import React, { useState } from 'react'
import CastItem from './CastItem'
import "../styleComponents.css"
import VideoItem from './VideoItem'

function MovieInfo(props) {

  return (
        <div className='mt-[-50px] z-20 relative'>
            <div className='text-gray-400 text-md font-semibold px-8 text-center'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.movie.overview}
            </div>

            <div className='text-white text-3xl font-semibold px-4 pt-16 pb-4'>
                VIDEOS
            </div>
            <div className='movie-app shadow-lg shadow-black mr-8'>
                <div className='row'>
                    {props.video.map((video) => (
                        <VideoItem 
                            key={video.videId}
                            video={video}
                        />
                     ))}
                 </div>
            </div>

            <div className='text-white text-3xl font-semibold pb-4 px-4 pt-20'>
                TOP CAST
            </div>
            <div className='movie-app shadow-lg shadow-black mr-8 pb-16'>
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