import React from 'react'
import { MdPlaylistAdd } from "react-icons/md";
import "../styleComponents.css"


function BottomMovieHover(movie) {
  
  const handlePlus = () => {
    //handle plus
  }

  return (
    <>
        <div className='text-white font-semibold text-sm ml-4 flex-1 text-start'>
            {movie.movieName}
        </div>
        <MdPlaylistAdd size={30} 
                className='
                text-black 
                font-semibold 
                bg-white
                rounded-full 
                shadow-2xl
                shadow-black
                mr-2
                mt-1
                mb-1
                hover:cursor-pointer'
                onClick={handlePlus}
        />
	</>
  )
}

export default BottomMovieHover