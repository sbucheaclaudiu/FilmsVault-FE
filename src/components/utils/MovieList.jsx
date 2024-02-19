import React from 'react'
import "../styleComponents.css"
import BottomMovieHover from './BottomMovieHover'
import MovieItem from './MovieItem'

function MovieList(movies) {

    const onClick = (id) => {
    }

    const addToPlaylist = () => {
        //handle ADD TO PLAYLIST
      }

  return (
    <>
        {movies.movies.map((movie) => (
            <MovieItem 
                key={movie.movieId}
                onClick={() => {}}
                movie={movie}
            />
        ))}
    </>
  )
}

export default MovieList;