import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import ListItem from './ListItem'
import { MdAccountCircle } from "react-icons/md";
import AccountButton from '../utils/AccountButton';


function Header(className) {
  const [textHeader, setTextHeader] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const d = new Date();
    if(6 < d.getHours() && d.getHours() < 11){
        console.log(d.getHours());
        setTextHeader("Good morning!");
    }
    else if(d.getHours() < 20){
        setTextHeader("Good evening!");
    }
    else{
        setTextHeader("Good night!");
    }
  }, []);

  return (
    <div className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-rose-600
        p-6
        `, className)}>
            <div className='
                 w-full
                 mb-4
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
            <div className='mb-2'>
                <h1 className='
                    text-white
                    text-3xl
                    font-semibold
                '>
                    {textHeader}
                </h1>
                <div className='
                     grid
                     grid-cols-2
                     sm:grid-cols-2
                     xl:grid-cols-3
                     2xl:grid-cols-4
                     gap-y-4
                     mt-4
                     gap-x-4
                '>
                    <ListItem image = {require("../../assets/watchlist.jpg")}
                              name="Watchlist"
                              href="watchlist"
                    />
                    <ListItem image = {require("../../assets/vault.jpg")}
                              name="Watched"
                              href="watched"
                    />
                </div>
            </div>
    </div>
  )
}

export default Header