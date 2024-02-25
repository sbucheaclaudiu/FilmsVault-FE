import React from 'react'
import LibraryBox from '../../components/sidebars/LibraryBox'
import NavBox from '../../components/sidebars/NavBox'
import FriendsActivityBox from '../../components/sidebars/FriendsActivityBox'
import PersonPage from '../../components/personPage/PersonPage'

function Person() {

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
      
      <PersonPage />

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

export default Person