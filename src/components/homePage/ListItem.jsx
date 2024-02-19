import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa"

function ListItem(itemList) {
  const navigate = useNavigate();

  const onClick = () =>{
    //navigate(itemList.hreaf)
  }

  return (
    <button 
        onClick={onClick}
        className='
            relative
            group
            flex
            intems-center
            rounded-md
            overflow-hidden
            gap-x-4
            bg-neutral-100/10
            hover:bg-neutral-100/20
            transition
            pr-4
    '>
        <div className='
             relative
             min-h-[64px]
             min-w-[64px]
        '>
            <img className='object-cover'
                 src={itemList.image}
                 alt="Image"
                 height={70}
                 width={70}
            />
        </div>
        <p className='font-medium truncate py-3 my-1.5 text-white'>
            {itemList.name}
        </p>
    </button>
  )
}

export default ListItem