import React from 'react'
import "../styleComponents.css"
import BottomMovieHover from './BottomMovieHover'
import MovieItem from './MovieItem'

function MovieList(props) {

    const onClick = (id) => {
    }

    const addToPlaylist = () => {
        //handle ADD TO PLAYLIST
      }

  return (
    <>
        {props.movies.map((movie) => (
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