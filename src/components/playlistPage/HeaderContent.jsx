import React, { useState, useEffect } from 'react'
import { MdAccountCircle } from "react-icons/md";
import AccountButton from '../utils/AccountButton';
import ModifyPlaylistModal from '../modals/ModifyPlaylistModal';
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { getMovieFromPlaylist, getPlaylistById } from '../../api/Playlist';
import { getUser } from '../../auth/AuthContext';

function HeaderContent(props) {
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const onPhotoClick = () => {
    setIsOpenModal(true);
  }

  const onPlaylistUpdated = async (id) => {
    navigate('/home');
  
  }

  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
  }, []);

  console.log(user);
  console.log(props.playlist);

  return (
    <div className='mt-16'>
                <div className='
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        gap-x-5
                '>
                    <button
                      disabled={user && props.playlist.playlistUsername != user.username}
                      className={`relative h-48 w-48 rounded-xl overflow-hidden min-w-0 flex-shrink-0 shadow-xl ${
                        isHovered ? 'opacity-80' : ''
                      }`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={onPhotoClick}
                    >
                      <img
                        src={props.playlist.imagePath}
                        alt="playlist"
                        className='h-full w-full shadow-xl object-cover'
                      />
                      {(isHovered && user && props.playlist.playlistUsername == user.username) && (
                      <div className="absolute inset-0 flex flex-col justify-center items-center">
                          <CiEdit size={50} className='text-white'/>
                      </div>
                      )}
                    </button>

                    <div className='
                            flex
                            flex-col
                            gap-y-2
                            mt-4
                            md:mt-0
                            w-auto
                            overflow-hidden
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
                                truncate
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
                            title="Edit Playlist Details"
                            description=""
                            onPlaylistUpdated={onPlaylistUpdated}
                            photo={props.playlist.imagePath}
                            name={props.playlist.name}
                            descr={props.playlist.description}
                            privatePlaylist={props.playlist.privatePlaylist}
                            id={props.playlist.id}
                            //description="Save and organize genre-specific movies effortlessly in your custom playlist."
                        />
        }
    </div>
  )
}

export default HeaderContent