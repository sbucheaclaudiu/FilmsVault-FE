import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import { getCast, getVideo } from '../../api/GetDetails';

function MoviePage() {
  const location = useLocation();
  const { movie } = location.state || {};
  const [cast, setCast] = useState();
  const [video, setVideo] = useState();

  useEffect(() => {
    const getCastActors = async () => {
      const castActors = await getCast(movie.type, movie.movieId);
      setCast(castActors);
      console.log(castActors);
    };
    
    const getVideos = async () => {
      const videos = await getVideo(movie.type, movie.movieId);
      setVideo(videos);
      console.log(videos);
    };

    getCastActors();
    getVideos();
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
              <Header movie={movie}/>
              {cast && video && <MovieInfo movie={movie} cast={cast} video={video}/>}
        </div>
    </div>
  )
}

export default MoviePage