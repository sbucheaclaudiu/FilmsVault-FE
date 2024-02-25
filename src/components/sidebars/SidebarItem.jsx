import React from 'react'
import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

function SidebarItem(item) {
  
  return (
    <Link to={item.href}
          className={twMerge(`
            flex
            flex-row
            h-auto
            item-center
            w-full
            gap-x-4
            text-md
            font-mediun
            cursor-pointer
            hover:text-white
            transition
            text-neutral-400
            `, item.active && "text-white"
            )
          }>
        <item.icon size={26}/>
        <p className="truncate w-full font-semibold"> {item.label} </p>
    </Link>
  )
}

export default SidebarItem