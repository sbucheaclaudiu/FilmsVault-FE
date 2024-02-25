import React, { useEffect, useState } from 'react'
import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import CreatePlaylistModal from '../modals/CreatePlaylistModal'
import { getPlaylists } from '../../api/Playlist';
import PlaylistItem from './PlaylistItem';
import { CgStack } from "react-icons/cg";

function Library() {
  
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const onClickPlus = () => {
    setIsOpenModal(true);
  }

  const getUserPlaylistsRequest = async () => {
    const playlistsLst = await getPlaylists();
    setPlaylists(playlistsLst);
  }

  const handlePlaylistCreated = () => {
    setIsOpenModal(false);
    getUserPlaylistsRequest();
  }


  useEffect(() => {
    getUserPlaylistsRequest();
  }, []);


  return (
    <div className='flex flex-col '>
        <div className='
             flex
             items-center
             justify-between
             px-4
             pt-4
             '>
                <div className='
                     inline-flex
                     items-center
                     gap-x-2
                     '>
                    <CgStack className="text-neutral-400" size={26}/>
                    <p className='
                       text-neutral-400
                       text-md
                       my-0
                       font-semibold
                       '> 
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus 
                    onClick={onClickPlus}
                    size={26}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                    '/>
        </div>

        {isOpenModal && <CreatePlaylistModal 
                            setIsOpenModal={setIsOpenModal}
                            title="Create new playlist"
                            description=""
                            onPlaylistCreated={handlePlaylistCreated}
                            //description="Save and organize genre-specific movies effortlessly in your custom playlist."
                        />
        }

        <div className='
             flex
             flex-col
             gap-y-2
             mt-4
             px-3
             '>
               {playlists.map((playlist) => (
                <PlaylistItem 
                  onClick={() => {}}
                  key={playlist.id}
                  playlist={playlist}
                />
               ))}
        </div>
    </div>
  )
}

export default Library