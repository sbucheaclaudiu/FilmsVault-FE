import React from 'react'
import MovieItem from '../utils/MovieItem'
import MovieList from '../utils/MovieList'

function SearchContent(props) {

  if(props.movies == null || props.movies.length == 0){
        return <div className='mt-12 text-neutral-400 ml-8 text-xl'>
                No movies / tv shows / actors found.
               </div>
    }

  return (
    <div className='
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-4
            gap-x-2
            gap-y-4
            mt-5
            mr-4
            '>
        <MovieList 
            movies={props.movies}
        />
    </div>
  )
}

export default SearchContent