import React from 'react'
import { twMerge } from 'tailwind-merge'

function GridScroll(props) {

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
        {props.children}
    </div>
  )
}

export default GridScroll