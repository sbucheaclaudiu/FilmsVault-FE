import React from 'react'
import HomeContent from './HomeContent'
import Header from '../utils/Header';
import HeaderContent from './HeaderContent';
import PersonItem from '../utils/PersonItem';

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
        <Header className='bg-gradient-to-b from-rose-600'>
          <HeaderContent />
        </Header>

        <HomeContent />

      </div>
    </div>
  )
}

export default HomePage