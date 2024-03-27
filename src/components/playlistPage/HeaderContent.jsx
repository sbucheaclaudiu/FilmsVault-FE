import React, { useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import AccountButton from '../utils/AccountButton';
import ModifyPlaylistModal from '../modals/ModifyPlaylistModal';

function HeaderContent(props) {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const onPhotoClick = () => {
    setIsOpenModal(true);
  }

  return (
    <div className='mt-16'>
                <div className='
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        gap-x-5
                '>
                    <div className='
                            relative
                            h-48
                            w-48
                            rounded-xl
                            overflow-hidden
                            min-w-0
                            flex-shrink-0
                            shadow-xl
                    '>
                      <img
                        src={
                          props.playlist.imagePath.endsWith("watchlist")
                          ? `${process.env.PUBLIC_URL}/actorBackground.jpg`
                          : props.playlist.imagePath.endsWith("watched")
                          ? `${process.env.PUBLIC_URL}/actorBackground2.jpg`
                          : `${process.env.PUBLIC_URL}/defaultPlaylist.jpg`
                        }
                        alt="playlist"
                        className='h-full w-full shadow-xl object-cover'
                      />
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
                                className='text-white'
                            />&nbsp;
                            {props.playlist.playlistUsername}&nbsp;&nbsp;•&nbsp;&nbsp;{props.moviesList.length} movies&nbsp;&nbsp;•&nbsp;&nbsp;{props.playlist.lastTimeEdit}
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

export default HeaderContent