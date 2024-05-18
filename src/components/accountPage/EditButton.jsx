import React from 'react'
import { twMerge } from "tailwind-merge"
import { FaUserEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

function EditButton(props) {
  
  return (
    <button
      type={props.type}
      className={twMerge(
        `
        w-1/4
        rounded-3xl
        bg-neutral-600/10
        border
        border-transparent
        px-3 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-bold
        hover:bg-rose-600/80
        transition
        shadow-xl
        flex
        justify-center
        items-center
        !z-30
      `,
        props.disabled && 'opacity-75 cursor-not-allowed',
        props.className
      )}
      disabled={props.disabled}
      ref={props.ref}
      {...props}
    >
      {props.text == "Edit account" && <FaUserEdit size={25} className='mr-2' />}

      {props.text}

      {props.text == "Delete account" && <TiDelete size={30} className='ml-2' />}
    </button>
  )
}

export default EditButton