import React, { useState, useEffect }from 'react'
import { getMovies } from '../../api/GetMovies';
import MovieList from '../utils/MovieList';

function HomePageMovieType(movieType) {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const moviesList = await getMovies(movieType.getMovies);
    setMovies(moviesList);
  }

  useEffect(() => {
    getMovieRequest();
  }, [])

  if(movies.length == 0){
    
    return <div className='pl-3 pr-5 mb-5'>
                <div className='flex justify-between items-center p-3'>
                    <h1 className='text-white text-2xl font-semibold'>
                        {movieType.movieType}
                    </h1>
                </div>

                <div className='pl-4'>
                    Oops! Something went wrong with the API call. Login again! 
                </div>
           </div>
  }

  return (
    <div className='pl-3 pr-5 mb-5'>
        <div className='flex justify-between items-center p-3'>
            <h1 className='text-white text-2xl font-semibold'>
                {movieType.movieType}
            </h1>
        </div>

        <div className='movie-app shadow-lg shadow-black ml-2'>
          <div className='row'>
             <MovieList movies={movies} />
          </div>
        </div>

    </div>
  )
}

export default HomePageMovieType;