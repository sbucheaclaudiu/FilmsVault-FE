import React from 'react'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import AccountButton from '../utils/AccountButton';
import HeaderContent from './HeaderContent';

function Header(props) {
    const navigate = useNavigate();

    return (
        <div 
        style={{'--image-url': `url(${props.movie.backdropPath})`
        }}
        className={twMerge(`
        relative
        bg-[image:var(--image-url)]
        bg-cover
        bg-center
        px-6
        pt-6
        pb-32
        z-10
        `, props.className)}
        >
          <div className='relative z-10'>
            <div className='
                 w-full
                 mb-2
                 flex
                 items-center
                 justify-beetwen
                 relative
            '>
                <div className='
                      hidden
                      md:flex
                      gap-x-2
                      items-center
                '>
                    <button
                        onClick={() => navigate(-1)}
                        className='
                        rounded-full
                        bg-black
                        flex
                        items-center
                        justify-center
                        hover:opacity-75
                        transition
                        size-10
                        '
                    >
                        <RxCaretLeft size={35}
                                className='text-white'
                        />
                    </button>
                    <button
                        onClick={() => navigate(1)}
                        className='
                        rounded-full
                        bg-black
                        flex
                        items-center
                        justify-center
                        hover:opacity-75
                        transition
                        size-10
                        '
                    >
                        <RxCaretRight size={35}
                                className='text-white'
                        />
                    </button>
                </div>

                <div className='flex md:hidden gap-x-2 items-center justify-beetwen'>  
                    <button className='
                            rounded-full
                            p-2
                            bg-white
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                            size-10
                    '>
                        <HiHome className='text-black' size={20}/>
                    </button>
                    <button className='
                            rounded-full
                            p-2
                            bg-white
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                            size-10
                    '>
                        <BiSearch className='text-black' size={20}/>
                    </button>

                    <div className='
                         flex
                         absolute
                         items-center
                         end-0
                         gap-x-2
                         '>
                    <button
                        onClick={() => {}}
                        className='
                        rounded-full
                        bg-black
                        flex
                        items-center
                        justify-center
                        hover:opacity-75
                        transition
                        size-10
                        '
                    >
                        <FaUserFriends size={35}
                                className='text-white
                                            size-6'
                        />
                    </button>
                    <AccountButton />
                    </div>
                </div>

                <div className='
                      hidden
                      md:flex
                      gap-x-2
                      items-center
                      absolute
                      end-0
                '>
                    <button
                        onClick={() => {}}
                        className='
                        rounded-full
                        bg-black
                        flex
                        items-center
                        justify-center
                        hover:opacity-75
                        transition
                        size-10
                        '
                    >
                        <FaUserFriends size={35}
                                className='text-white
                                            size-6'
                        />
                    </button>
                    <AccountButton />
                </div>
            </div>
                <HeaderContent movie={props.movie} isMovie={props.isMovie} isTV={props.isTV}/>
            </div>
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 opacity-100"></div>
            </div>
    </div>
    )
}

export default Header