import React from 'react'
import BottomMovieHover from './BottomMovieHover'

function MovieItem(props) {
  
  return (
        <div 
                 key={props.movie.movieId}
                 className='
                 relative
                 image-container
                 justify-content-start
                 d-flex  
                 rounded-xl
                 overflow-hidden 
                 gap-x-4 
                 cursor-pointer 
                 !h-68
                 !w-48
                 !pr-0
                 !pl-0
                 ml-4
                 hover:border-[4px]
               hover:border-neutral-700
                 '>
                    <img src={props.movie.posterPath.endsWith("null") ? `${process.env.PUBLIC_URL}/posterNotFound.jpg` : props.movie.posterPath} 
                            alt="poster"
                            className='h-full w-full'
                            >
                    </img>
                    <div
					    className='overlay backdrop-blur-md flex w-full items-center hover:cursor-text'>
						    <BottomMovieHover movieName={props.movie.movieName}/>
					</div>
         </div>
  )
}

export default MovieItem