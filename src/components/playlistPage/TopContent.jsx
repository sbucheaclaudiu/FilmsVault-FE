import React, { useState, useEffect, useRef } from 'react'
import { MdOutlineDownloading } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { TiArrowShuffle } from "react-icons/ti";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";
import { RiListUnordered } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import SearchInput from './SearchInput';


function TopContent(props) {
    const [isVisible, setIsVisible] = useState(false);

    const handleSearchClick = () => {
        setIsVisible(true);
    };


    return (
        <div className='
                opacity-1
                mt-4
                flex
                items-center
                w-full
        '>
            <div className='flex justify-content-start items-center space-x-4'>
                <MdOutlineDownloading onClick={() => { }}
                    size={32}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                '/>
                <TiArrowShuffle onClick={() => { }}
                    size={32}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                '/>
                <GiPerspectiveDiceSixFacesRandom onClick={() => { }}
                    size={32}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                '/>
                <TiDeleteOutline onClick={() => { }}
                    size={35}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                '/>
                <SlOptions onClick={() => { }}
                    size={32}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                '/>
            </div>

            <div className='flex justify-content-end w-full items-center space-x-8'>
                {isVisible ? (
                    <SearchInput
                        setIsVisible={setIsVisible}
                        searchValue={props.searchValue}
                        setSearchValue={props.setSearchValue}
                        isVisible={isVisible}
                    />
                ) : (<IoSearch onClick={handleSearchClick}
                    size={24}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                    '/>
                )}
                <button
                    onClick={() => { }}
                    className='
                        flex
                      text-neutral-400
                      hover:text-white
                        transition
                        items-center
                '>
                    Sort by
                    <RiListUnordered
                        size={23}
                        className='ml-3'
                    />
                </button>
            </div>
        </div>
    )
}

export default TopContent