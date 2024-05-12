import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import PersonInfo from './PersonInfo';
import { getMovieCredits } from '../../api/GetDetails';
import Header from '../utils/Header';
import HeaderContent from './HeaderContent';

function MoviePage() {
  const location = useLocation();
  const { person } = location.state || {};
  const [movieCredits, setMovieCredits] = useState();

  useEffect(() => {
    const getMovieCredits2 = async () => {
      
        const movies = await getMovieCredits(person.personId);
        setMovieCredits(movies);
    };

    getMovieCredits2();
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
              <Header className="bg-rose-600" backdropPath={person.backdropPath}>
                  <HeaderContent person={person}/>
              </Header>
              {movieCredits && <PersonInfo person={person} movieCredits={movieCredits}/>}
        </div>
    </div>
  )
}

export default MoviePage