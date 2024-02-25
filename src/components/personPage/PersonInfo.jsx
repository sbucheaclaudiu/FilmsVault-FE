import React from 'react'
import MovieList from '../utils/MovieList';

function PersonInfo(props) {
    console.log(props.movieCredits);

    return (
        <div className='mt-[-15px] z-20 relative mr-2 ml-2'>
            <div className='mb-5 pl-4 flex items-center'>
                <div className='border-r-8 border-rose-600 h-6 mr-2'></div>
                <div className='text-white text-3xl font-semibold'>
                    KNOW FOR
                </div>
                <div className='text-white text-xl font-semibold ml-4'>
                    ({props.movieCredits.length})
                </div>
            </div>

            <div className='
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    2xl:grid-cols-4
                    gap-x-2
                    gap-y-4 
                    mr-4
            '>
                <MovieList
                    movies={props.movieCredits}
                />
            </div>
        </div>
    )
}

export default PersonInfo