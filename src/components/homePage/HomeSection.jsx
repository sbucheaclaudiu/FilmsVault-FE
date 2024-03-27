import React, { useState, useEffect } from 'react'
import { getMovies } from '../../api/GetMovies';
import MovieList from '../utils/MovieList';
import SlideScroll from '../showFormat/SlideScroll';
import HeaderScroll from '../utils/HeaderScroll';

function HomeSection(movieType) {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const moviesList = await getMovies(movieType.getMovies);
    setMovies(moviesList);
  }

  useEffect(() => {
    getMovieRequest();
  }, [])

  return (
    
    <div className='pl-4 pr-5 mb-6'>
      <HeaderScroll headerName={movieType.movieType} />

      <SlideScroll
          length={movies.length}
          message="Oops! Something went wrong with the API call. Login again! (Auth Expired)"
      >
          <MovieList movies={movies} />
      </SlideScroll>

    </div>
  )
}

export default HomeSection;