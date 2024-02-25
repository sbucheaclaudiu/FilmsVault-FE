import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import Library from './Library'

function LibraryBox(className) {
  
  return (
    <div className="
      bg-neutral-900 
        rounded-lg 
        w-full
        overflow-y-auto
        h-full
        ">
          <Library />
    </div>
  )
}

export default LibraryBox