import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopContent from './TopContent';
import TableContent from './TableContent';


function PlaylistContent(props) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');


  //   if(props.movie.length == 0){
  //     return <div className='
  //                     flex
  //                     flex-col
  //                     gap-y-2
  //                     w-full
  //                     px-6
  //                     text-neutral-400
  //            '>

  //            </div>
  //   }

  return (
    <div className='
            relative
            flex
            flex-col
            gap-y-2
            w-full
            px-6
            bg-neutral-900/30
            mt-[-260px]
            !z-40
            min-h-2/4
    '>
      <TopContent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TableContent moviesList={props.moviesList} />

    </div>
  )
}

export default PlaylistContent;