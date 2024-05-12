import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopContent from './TopContent';
import TableContent from './TableContent';


function PlaylistContent(props) {
  const navigate = useNavigate();

  const sortByName = () => {
    props.sortByName();
  };

  const sortByDateAdded = () => {
    props.sortByDateAdded();
  };

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
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
        moviesList={props.moviesList}
        sortByName={sortByName}
        sortByDateAdded={sortByDateAdded}
        playlist={props.playlist}
      />
      
      <TableContent playlist={props.playlist} moviesList={props.moviesList} fetchMovies={props.fetchMovies} searchValue={props.searchValue}/>

    </div>
  )
}

export default PlaylistContent;