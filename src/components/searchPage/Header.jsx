import React from 'react'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { MdAccountCircle } from "react-icons/md";
import AccountButton from '../utils/AccountButton';

function Header(className) {
  const navigate = useNavigate();

  return (
    <div className={twMerge(`
        h-fit
        bg-neutral-900
        px-6
        pt-6
        `, className)}>
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
    </div>
  )
}

export default Header