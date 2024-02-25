import React from 'react'
import { useNavigate } from 'react-router-dom';

function PlaylistItem(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/playlist/${props.playlist.name}`, { state: { playlist: props.playlist } });
  }

  return (
      <div
        onClick={handleClick}
        className='
            flex 
            items-center 
            gap-x-3
            cursor-pointer 
          hover:bg-neutral-700/60 
            w-full 
            p-2
            rounded-md
        '
    >
        <div className='
                relative 
                rounded-md 
                h-[64px]
                w-[64px]
                overflow-hidden
        '>
            <img 
                fill="true"
                src={
                    props.playlist.imagePath.endsWith("watchlist")
                        ? `${process.env.PUBLIC_URL}/actorBackground.jpg`
                        : props.playlist.imagePath.endsWith("watched")
                        ? `${process.env.PUBLIC_URL}/actorBackground2.jpg`
                        : `${process.env.PUBLIC_URL}/defaultPlaylist.jpg`
                }
                alt="playlist photo"
                className='object-cover h-full w-full'
            />
        </div>
        <div className='
                flex
                flex-col
                overflow-hidden
                justify-center
                font-semibold
        '>
            <div className='text-white truncate'>
                {props.playlist.name}
            </div>
            <div className='text-neutral-400 text-sm truncate'>
                By {props.playlist.user.name}
            </div>
        </div>
      </div>
  )
}

export default PlaylistItem