import React, { useState, useEffect, useRef } from 'react'
import MenuPlaylistItem from './MenuPlaylistItem'
import SearchInput from './SearchInput'
import { AiOutlinePlus } from 'react-icons/ai'
import CreatePlaylistModal from '../modals/CreatePlaylistModal';
import "../styleComponents.css"
import { twMerge } from "tailwind-merge"
import { getPlaylists } from '../../api/Playlist';


function AddToPlaylistMenu(props) {
  
  const [playlists, setPlaylists] = useState(props.playlists);
  const [searchValue, setSearchValue] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const menuRef = useRef(null);

  const getPlaylistsByName = async (searchValue) => {

    if(searchValue == "" || searchValue == undefined){
      setPlaylists(await getPlaylists());
    }
    else {
      const foundPlaylist= [];
      const lstPlaylist = await getPlaylists();
      for (const playlist of lstPlaylist) {
        if (playlist.name.toLowerCase().includes(searchValue.toLowerCase())) {
          foundPlaylist.push(playlist);
        }
      }
      setPlaylists(foundPlaylist);
    }
  }

  const newPlaylistClick = () => {
    //
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      getPlaylistsByName(searchValue);
    }, 600);

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(timeout);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };

  }, [searchValue]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        props.onToggleMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div 
      ref={menuRef}
      className={twMerge(`
                    absolute
                    addToPlaylistMenu
                    bottom-full
                    w-56
                    right-32
                  bg-neutral-800
                    rounded-md 
                    shadow-2xl
                    p-[7px]
                    max-h-56
                    overflow-y-auto
                    mb-[6px]
                    add-to-playlist-menu
            `,props.className
            )}>
            <SearchInput 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <button 
              onClick={newPlaylistClick}
              className='
                  text-sm
                  flex
                  w-full 
                  py-[10px]
                  px-[12px]
                text-white
                  text-left
                hover:bg-neutral-600/60
                  hover:rounded-sm
                  font-[500]
                  border-b-[1px]
                  border-neutral-600
                  mb-[1px]
            '>
              <AiOutlinePlus 
                    size={20}
                    className='
                    text-neutral-400
                    cursor-pointer
                    mr-3
                    ml-[-4px]
                    '/>
              New playlist
            </button>
            {playlists.map((playlist) => (
                        <MenuPlaylistItem
                            modalRef={menuRef}
                            key={playlist.id}
                            playlist={playlist}
                            movie={props.movie}
                            onToggleMenu={props.onToggleMenu}
                        />
                ))}
            {/* {isOpenModal && <CreatePlaylistModal
                            setIsOpenModal={setIsOpenModal}
                            title="Create new playlist"
                            description=""
                        />
            } */}
    </div>
  )
}

export default AddToPlaylistMenu