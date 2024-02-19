import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { MdAccountCircle } from "react-icons/md";
import AccountButton from '../utils/AccountButton';
import ModifyPlaylistModal from '../modals/ModifyPlaylistModal';

function Header(props) {

  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const onPhotoClick = () => {
    setIsOpenModal(true);
  }

  return (
    <div className={twMerge(`
        h-fit
        bg-gradient-to-b 
        from-rose-600
        px-6
        pt-6
        `, props.className)}>
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

            <div className='mt-20'>
                <div className='
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        gap-x-5
                '>
                    <div className='
                            relative
                            h-32
                            w-32
                            lg:h-44
                            lg:w-44
                            rounded-xl
                            overflow-hidden
                    '>
                        <button onClick={onPhotoClick}
                                className='relative group overflow-hidden'
                        >
                          <img 
                            fill="true"
                            src={
                                props.playlist.imagePath.endsWith("watchlist")
                                    ? `${process.env.PUBLIC_URL}/watchlist.jpg`
                                    : props.playlist.imagePath.endsWith("watched")
                                    ? `${process.env.PUBLIC_URL}/vault.jpg`
                                    : `${process.env.PUBLIC_URL}/watchlist2.jpg`
                            }
                            alt="playlist photo"
                            className='object-cover h-full w-full hover:brightness-50'
                          />
                        </button>
                    </div>

                    <div className='
                            flex
                            flex-col
                            gap-y-2
                            mt-4
                            md:mt-0
                    '>
                        <div className='hidden md:block font-semibold text-sm text-white'>
                            Playlist
                        </div>
                        <h1 className='
                                text-white
                                text-4xl
                                sm:text-5xl
                                lg:text-7xl
                                font-semibold
                        '>
                            {props.playlist.name}
                        </h1>
                        <div className='
                                text-white
                                text-md
                                font-semibold
                                flex
                                items-center
                        '>
                            <MdAccountCircle size={25}
                                className='text-white
                                            '
                            />&nbsp;
                            {props.playlist.user.name}&nbsp;&nbsp;•&nbsp;&nbsp;{props.playlist.playlistMovies.length} movies&nbsp;&nbsp;•&nbsp;&nbsp;{props.playlist.lastTimeEdit.slice(0,10)}
                        </div>
                    </div>
                </div>
            </div>

            {isOpenModal && <ModifyPlaylistModal 
                            setIsOpenModal={setIsOpenModal}
                            title="Edit Details"
                            description=""
                            onPlaylistCreated={{}}
                            //description="Save and organize genre-specific movies effortlessly in your custom playlist."
                        />
        }
    </div>
  )
}

export default Header