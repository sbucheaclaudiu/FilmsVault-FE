import React, { useEffect, useRef } from 'react';
import "../styleComponents.css"
import { twMerge } from 'tailwind-merge'

function SearchInput(props) {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input 
       ref={inputRef}
        className={twMerge(`
            search-input-playlistFind
            !w-full
            my-[2px]
            pl-9
            pr-2
            py-2
            rounded-md
            !bg-neutral-400/30
            text-sm
            placeholder:text-neutral-400
            disabled:cursor-not-allowed
            disabled:opacity-50
            focus:outline-none
            text-white
            font-[500]
           `, props.className)}
        
           placeholder='Find a playlist'
           value={props.searchValue}
           onChange={(e) => props.setSearchValue(e.target.value)}
           type="search"
    />
  )
}

export default SearchInput