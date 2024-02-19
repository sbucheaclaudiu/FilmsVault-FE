import React from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom';

function PlaylistPage() {
  const location = useLocation();
  const { playlist } = location.state || {};

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
              <Header playlist={playlist}/>
        </div>
    </div>
  )
}

export default PlaylistPage