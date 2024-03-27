import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import { getCast, getVideos } from '../../api/GetDetails';
import HeaderContent from './HeaderContent';
import Header from '../utils/Header';

function MoviePage() {
  const location = useLocation();
  const { movie } = location.state || {};
  const [cast, setCast] = useState();
  const [video, setVideo] = useState();

  useEffect(() => {
    const getCastActors = async () => {
      const castActors = await getCast(movie.type, movie.movieId);
      setCast(castActors);
    };
    
    const getMovieVideos = async () => {
      const videos = await getVideos(movie.type, movie.movieId);
      setVideo(videos);
    };

    getCastActors();
    getMovieVideos();

  }, []);


  return (
    <div className='bg-black h-full flex-1 overflow-y-auto py-2'>
        <div className='
             bg-neutral-900
             rounded-lg
             h-full
             w-full
             overflow-hidde
             overflow-y-auto
             '>

              <Header backdropPath={movie.backdropPath}>
                  <HeaderContent movie={movie}/>
              </Header>

              {cast && video && <MovieInfo movie={movie} cast={cast} video={video}/>}
        </div>
    </div>
  )
}

export default MoviePage