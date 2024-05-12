import React from 'react'
import LibraryBox from '../../components/sidebars/LibraryBox'
import NavBox from '../../components/sidebars/NavBox'
import FriendsActivityBox from '../../components/sidebars/FriendsActivityBox'
import AccountPage from '../../components/accountPage/AccountPage'


function Account() {

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
      
      <AccountPage />

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

export default Account