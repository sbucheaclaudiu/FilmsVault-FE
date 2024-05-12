import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getMovieFromPlaylist, getPlaylistById } from '../../api/Playlist';
import { twMerge } from 'tailwind-merge'
import { TiPin } from "react-icons/ti";

function PlaylistItem(props) {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const targetPath = `/playlist/${props.playlist.name}${props.playlist.id}`

  const handleClick = async () => {
    const playlistInfo = await getPlaylistById(props.playlist.id);
    const moviesFetch = await getMovieFromPlaylist(props.playlist.id);

    navigate(`/playlist/${props.playlist.name}${props.playlist.id}`, { state: { playlist: playlistInfo, moviesList: moviesFetch} });
  }
  
  return (
      <div
        onClick={handleClick}
        className={`
            flex 
            items-center 
            gap-x-3
            cursor-pointer 
            ${currentPath === targetPath ? 'bg-neutral-600/60 hover:bg-neutral-600/80' : 'hover:bg-neutral-700/60'}
            w-full 
            p-2
            rounded-md
        `}
    >
        <div className='
                relative 
                rounded-md 
                !h-[64px]
                !w-[64px]
                !min-h-[64px] 
                !min-w-[64px]
                overflow-hidden
        '>
            <img 
                src={props.playlist.imagePath}
                alt="playlist photo"
                className='absolute object-cover h-full w-full'
            />
        </div>
        <div className='
                flex
                flex-col
                overflow-hidden
                justify-center
                font-semibold
                w-auto
        '>
            <div className={`
                    truncate
                    ${currentPath === targetPath ? 'text-white' : 'text-neutral-400'}
                `}>
                {props.playlist.name}
            </div>
            <div className={`
                    text-neutral-400 
                    text-sm 
                    truncate
                    ${currentPath === targetPath ? 'text-neutral-300' : 'text-neutral-500'}
                `}>
                By {props.playlist.playlistUsername}
            </div>
        </div>
        {(props.playlist.name == "Watchlist" || props.playlist.name == "Watched") && 
            <div className='ml-auto'>
                <TiPin size={20} className='text-white' />
            </div>
        }
      </div>
  )
}

export default PlaylistItem