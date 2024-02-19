import React from 'react'
import { twMerge } from "tailwind-merge"

function Button(props) {
  
  return (
    <button
      type={props.type}
      className={twMerge(
        `
        w-full 
        rounded-full 
        bg-green-500
        border
        border-transparent
        px-3 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-bold
        hover:opacity-75
        transition
      `,
        props.disabled && 'opacity-75 cursor-not-allowed',
        props.className
      )}
      disabled={props.disabled}
      ref={props.ref}
      {...props}
    >
        {props.text}
    </button>
  )
}

export default Button