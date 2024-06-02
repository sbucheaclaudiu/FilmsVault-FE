import React from 'react'
import { twMerge } from 'tailwind-merge'

function GridScrollPlaylist(props) {

  if (props.length == 0) {
    return <div 
              className={twMerge(`
                    text-neutral-400
                    ml-10
                    text-xl
                    pt-8
              `, props.className)}
            >
              {props.message}
           </div>
  }

  return (
    <div className='
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4

    '>
        {props.children}
    </div>
  )
}

export default GridScrollPlaylist