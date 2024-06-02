import React, { useMemo } from 'react'
import SidebarItem from './SidebarItem'
import { useLocation } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { GiArtificialHive } from "react-icons/gi";
import { CgPlayListSearch } from "react-icons/cg";
import { BiMoviePlay } from "react-icons/bi";


function NavBox() {
  const location = useLocation();
  const { hash, pathname, search } = location;

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: "Home",
      active: pathname === "/home",
      href: '/home',
    },
    {
      icon: BiSearch,
      label: "Search",
      active: pathname === "/search",
      href: '/search',
    },
  ], []);
  
  return (
    <div className='
      bg-neutral-900 
        rounded-lg 
        h-fit 
        w-full
         '>
          <div className='
               flex
               flex-col
               gap-y-2
               px-4
               py-4
               '>
                {routes.map((item) => (
                  <SidebarItem key={item.label}
                  {...item}
                  />
                ))}
          </div>
    </div>
  )
}

export default NavBox