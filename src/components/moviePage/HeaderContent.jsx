import React from 'react'
import { IoMdStarOutline } from "react-icons/io";

function HeaderContent(props) {

    return (
        <div className='mt-10'>
            <div className='
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        gap-x-5
                '>
                <div className='
                            relative
                            h-68
                            w-48
                            rounded-xl
                            overflow-hidden
                            min-w-0
                            flex-shrink-0
                    '>
                    <img
                        src={props.movie.posterPath.endsWith("null") ? `${process.env.PUBLIC_URL}/posterNotFound.jpg` : props.movie.posterPath}
                        alt="playlist photo"
                        className='h-full w-full shadow-xl'
                    />
                </div>

                <div className='
                            flex
                            flex-col
                            gap-y-2
                            mt-4
                            md:mt-0
                    '>
                    <div className='hidden md:block font-semibold text-sm text-white'>
                        Movie
                    </div>
                    <h1 className='
                                text-white
                                text-4xl
                                sm:text-5xl
                                lg:text-7xl
                                font-semibold
                                mb-4
                                mt-2
                        '>
                        {props.movie.movieName}
                    </h1>
                    <div className='
                              text-white
                                text-xl
                                font-semibold
                                flex
                                items-center
                        '>
                        {props.movie.releaseDate.slice(0, 4)}&nbsp;&nbsp;•&nbsp;&nbsp;{props.movie.runtime} minutes&nbsp;&nbsp;
                    </div>
                    <div className='
                              text-white
                                text-xl
                                font-semibold
                                flex
                                items-center
                        '>
                        {props.movie.genres}
                    </div>
                    <div className="flex items-center">
                        <IoMdStarOutline size={26} className='text-yellow-300 mr-2'/>
                        <div className='text-xl text-white font-semibold'>
                            {props.movie.rating} 
                            <span className='text-sm'> / 10 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderContent