import React, { useEffect, useState } from 'react'
import qs from "query-string"
import { useNavigate } from "react-router-dom";
import useDebounce from '../../hooks/useDebounce';
import { IoSearch } from "react-icons/io5";
import "../styleComponents.css"

function SearchInput(props) {

  return (
  
    <input className='
            search-input
            rounded-3xl
            bg-neutral-700
            pl-12
            pr-4
            py-3
            text-md
            w-[50%]
            text-sm
            placeholder:text-neutral-400
            disabled:cursor-not-allowed
            disabled:opacity-50
            focus:outline-none
            text-white
            focus:border-white
            focus:border-[2px]
            hover:border-[0.5px]
            hover:border-white
           '
           placeholder='Search movies, tv shows, actors'
           value={props.searchValue}
           onChange={(e) => props.setSearchValue(e.target.value)}
           type="search"
           />
  )
}

export default SearchInput