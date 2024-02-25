import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import { getCast, getVideos } from '../../api/GetDetails';

function MoviePage() {
  const location = useLocation();
  const { movie } = location.state || {};
  const [cast, setCast] = useState();
  const [video, setVideo] = useState();
  const [isMovie, setIsMovie] = useState(false);
  const [isTV, seIsTV] = useState(false);

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

    if(movie.type === "movie"){
      setIsMovie(true);
    }
    else{
      seIsTV(true);
    }

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
              <Header movie={movie} isMovie={isMovie} isTV={isTV}/>
              {cast && video && <MovieInfo movie={movie} cast={cast} video={video}/>}
        </div>
    </div>
  )
}

export default MoviePage