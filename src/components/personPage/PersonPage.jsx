import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom';
import PersonInfo from './PersonInfo';
import { getMovieCredits } from '../../api/GetDetails';

function MoviePage() {
  const location = useLocation();
  const { person } = location.state || {};
  const [movieCredits, setMovieCredits] = useState();

  console.log(person);
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
              <Header person={person}/>
              {movieCredits && <PersonInfo person={person} movieCredits={movieCredits}/>}
        </div>
    </div>
  )
}

export default MoviePage