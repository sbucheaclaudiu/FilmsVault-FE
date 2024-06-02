import React from 'react'
import { twMerge } from 'tailwind-merge'

function SlideScroll(props) {

  if (props.length == 0) {
    return <div 
                className={twMerge(`
                mt-6
                text-neutral-400
                ml-8
                text-md
                mb-6
                `, props.className)}
           >
              {props.message}
           </div>
  }

  return (
    <div className='movie-app ml-2'>
          <div className='row'>
              {props.children}
          </div>
    </div>
  )
}

export default SlideScroll