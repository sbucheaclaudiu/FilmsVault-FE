import React from 'react'
import Header from './Header'
import HomePageContent from './HomePageContent'

export const revalidate = 0;

function HomePage() {
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
              <Header/>
              <HomePageContent/>
        </div>
      </div>
  )
}

export default HomePage