import React from 'react'
import SearchPage from '../../components/searchPage/SearchPage'
import LibraryBox from '../../components/sidebars/LibraryBox'
import NavBox from '../../components/sidebars/NavBox'
import { First } from 'react-bootstrap/esm/PageItem'
import FriendsActivityBox from '../../components/sidebars/FriendsActivityBox'
import MoviePage from '../../components/moviePage/MoviePage'

function Movie() {
  return (
    <div className="flex full-height">
      <div className='
           hidden
           md:flex
           flex-col
           gap-y-2
           bg-black
           h-full
           w-[300px]
           p-2
           '>
           <NavBox />
           <LibraryBox />
      </div>
      
      <MoviePage />

      <div className='
           hidden
           md:flex
           flex-col
           gap-y-2
           bg-black
           h-full
           w-[300px]
           p-2
           '>
           <FriendsActivityBox />
      </div>
    </div>
  )
}

export default Movie