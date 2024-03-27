import React, { useEffect, useRef } from 'react';
import "../styleComponents.css"
import { twMerge } from 'tailwind-merge'

function SearchInput(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && props.isVisible) {
      inputRef.current.focus();
    }

  }, [props.isVisible]);

  return (
    <input 
        ref={inputRef}
        className={twMerge(`
            search-input-playlist
            rounded-md
            !bg-neutral-400/20
            pl-12
            pr-4
            py-[6px]
            text-sm
            lg:w-1/3
            sm:w-1/2
            placeholder:text-neutral-400
            disabled:cursor-not-allowed
            disabled:opacity-50
            focus:outline-none
            text-white
           `, props.className)}

           placeholder='Search in playlist'
           value={props.searchValue}
           onChange={(e) => props.setSearchValue(e.target.value)}
           type="search"
           onBlur={() => props.setIsVisible(false)}
    />
  )
}

export default SearchInput