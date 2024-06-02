import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import { getCast, getRecommended, getVideos } from '../../api/GetDetails';
import HeaderContent from './HeaderContent';
import Header from '../utils/Header';

function MoviePage() {
  const location = useLocation();
  const { movie } = location.state || {};
  const [cast, setCast] = useState();
  const [video, setVideo] = useState();
  const [recommendedMovies, setRecommendedMovies] = useState();

  console.log(movie);

  useEffect(() => {

    const getCastActors = async () => {
      const castActors = await getCast(movie.type, movie.movieId);
      setCast(castActors);
    };
    
    const getMovieVideos = async () => {
      const videos = await getVideos(movie.type, movie.movieId);
      setVideo(videos);
    };

    const getRecommendedMovies = async () => {
      const recommended = await getRecommended(movie.movieName);
      setRecommendedMovies(recommended);
    };

    getCastActors();
    getMovieVideos();
    getRecommendedMovies();

  }, [location.pathname]);

  window.scrollTo(0, 0);

  return (
    <div className='bg-black h-full flex-1 overflow-y-auto py-2'>
        <div className='
             bg-neutral-900
             rounded-lg
             h-full
             w-full
             overflow-auto
             overflow-y-auto
             '>

              <Header backdropPath={movie.backdropPath}>
                  <HeaderContent movie={movie}/>
              </Header>

              {cast && video && recommendedMovies && <MovieInfo movie={movie} cast={cast} video={video} recommendedMovies={recommendedMovies}/>}
        </div>
    </div>
  )
}

export default MoviePage