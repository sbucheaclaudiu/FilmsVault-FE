import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import { getMovies, searchMultiByName } from '../../api/GetMovies';
import GridScroll from '../showFormat/GridScroll';
import MovieList from '../utils/MovieList';
import Header from '../utils/Header';

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);

  const getMultiByName = async (searchValue) => {

    if(searchValue == "" || searchValue == undefined){
      const moviesList = await getMovies("trendingAll");
      setMovies(moviesList);
    }
    else{
      const moviesList = await searchMultiByName(searchValue);
      setMovies(moviesList);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      getMultiByName(searchValue);
    }, 600);

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(timeout);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };

  }, [searchValue]);


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
              <Header className='bg-gradient-to-b from-rose-600 h-[50px]'>
                <div className='flex items-center justify-center w-full'>
                    <SearchInput 
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                    />
                </div>
              </Header>

              <GridScroll 
                  length={movies.length}
                  message="No movies / tv shows / actors found."
              >
                  <MovieList movies={movies} />
              </GridScroll>
        </div>
    </div>
  )
}

export default SearchPage