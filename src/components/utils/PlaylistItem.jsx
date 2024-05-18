import React from 'react'
import { getDetails } from '../../api/GetDetails';
import { useNavigate } from 'react-router-dom';
import { getMovieFromPlaylist, getPlaylistById } from '../../api/Playlist';

function PlaylistItem(props) {

  const navigate = useNavigate();

  const handleClick = async () => {
    const playlistInfo = await getPlaylistById(props.playlist.id);
    const moviesFetch = await getMovieFromPlaylist(props.playlist.id);

    navigate(`/playlist/${props.playlist.name}${props.playlist.id}`, { state: { playlist: playlistInfo, moviesList: moviesFetch} });
  }

  console.log(props);

  return (
    <div className="flex flex-col !w-60 h-72 mx-2 rounded-xl hover:bg-black bg-black/20 cursor-pointer"
         onClick={handleClick}
    >
        <img
          src={props.playlist.imagePath}
          alt="Imagine"
          className="mt-[12px] w-full h-2/3 object-cover rounded-xl"
        />
        <div className="text-white pt-3 px-2 text-xl font-bold">
          {props.playlist.name}
        </div>
        <div className="text-neutral-400 px-2 pt-1 text-lg font-bold truncate">
          By {props.playlist.playlistUsername}
        </div>
    </div>
  )
}

export default PlaylistItem