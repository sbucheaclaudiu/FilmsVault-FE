import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../utils/Header';
import HeaderContent from './HeaderContent';
import PlaylistContent from './PlaylistContent';

function PlaylistPage() {
  const location = useLocation();
  const { playlist, moviesList } = location.state || {};

  console.log(playlist);
  console.log(moviesList);
  
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
              <Header  
                // backdropPath={process.env.PUBLIC_URL + '/loginImage.jpg'}
                className='h-3/4 bg-gradient-to-b from-yellow-400'
              >
                <HeaderContent playlist={playlist} moviesList={moviesList}/>
              </Header>
              <PlaylistContent 
                  playlist={playlist} 
                  moviesList={moviesList}
              />
        </div>
    </div>
  )
}

export default PlaylistPage