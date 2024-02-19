import React from 'react'
import { twMerge } from "tailwind-merge"

function Input(props) {

  return (
    <input
      type={props.type}
      className={twMerge(
        `
        flex 
        w-full
        rounded-md
        bg-neutral-700
        border-[1px]
        border-transparent
        px-3
        py-3 
        text-sm 
        file:border-0 
        file:bg-transparent 
        file:text-sm 
        file:font-medium 
        placeholder:text-neutral-400 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        focus:outline-none
        text-md
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

Input.displayName = "Input";

export default Input