import React from 'react'
import { twMerge } from "tailwind-merge"

function Textarea(props) {
  return (
    <textarea
      type={props.type}
      className={twMerge(
        `
        flex 
        w-full
        h-full
        resize-none
        rounded-md
        bg-neutral-700
        border-[1px]
        border-transparent
        px-3
        py-3 
        text-xs 
        file:border-0 
        file:bg-transparent 
        file:text-sm 
        file:font-medium 
        placeholder:text-neutral-400 
        placeholder:text-xs
        disabled:cursor-not-allowed 
        disabled:opacity-50
        focus:outline-none
        text-white
      `,
        props.disabled && 'opacity-75',
        props.className
      )}
      disabled={props.disabled}
      ref={props.ref}
      {...props}
    />
  )
}

export default Textarea