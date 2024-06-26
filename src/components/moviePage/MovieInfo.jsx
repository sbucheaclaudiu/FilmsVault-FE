import React from 'react'
import PersonItem from '../utils/PersonItem'
import "../styleComponents.css"
import VideoItem from './VideoItem'
import SlideScroll from '../showFormat/SlideScroll'
import HeaderScroll from '../utils/HeaderScroll'
import MovieList from '../utils/MovieList'

function MovieInfo(props) {

    return (
        <div className='mt-[-80px] !z-10 relative pl-4 pr-5 mb-6'>
            <div className='text-gray-400 text-md font-semibold px-8 text-center pb-10'>
                {props.movie.overview}
            </div>

            <div className='pb-20'>
                <HeaderScroll headerName="VDEOS" />
                <SlideScroll
                        length={props.video.length}
                        message="No videos found on Youtube."
                        className="text-xl"
                >
                    {props.video.map((video) => (
                        <VideoItem
                            key={video.videoId}
                            video={video}
                        />
                    ))}
                </SlideScroll>
            </div>

            <div className='pb-20'>
            <HeaderScroll headerName="CAST" length={props.cast.length} />
            <SlideScroll
                        length={props.cast.length}
                        message="No cast found."
                        className="text-xl"
                >
                {props.cast.map((person) => (
                    <PersonItem
                        key={person.personId}
                        person={person}
                    />
                ))}
            </SlideScroll>
            </div>

            <div className='pb-2'>
            <HeaderScroll headerName="More Like This" length={props.recommendedMovies.length} />
            <SlideScroll
                        length={props.recommendedMovies.length}
                        message="No movies like this found."
                        className="text-xl"
                >
                    <MovieList
                        movies={props.recommendedMovies}
                    />
            </SlideScroll>
            </div>

        </div>
    )
}

export default MovieInfo