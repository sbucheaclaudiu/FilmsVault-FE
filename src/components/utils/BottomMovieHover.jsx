import React, { useState } from 'react'
import { MdPlaylistAdd } from "react-icons/md";
import "../styleComponents.css"
import AddToPlaylistMenu from '../menu/AddToPlaylistMenu';
import { getPlaylists } from '../../api/Playlist';


function BottomMovieHover(props) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const toggleMenu = (event) => {
    setPlaylistsAvailable();
    setIsMenuOpen(!isMenuOpen);
    event.stopPropagation();
  };

  const setPlaylistsAvailable = async () => {
    setPlaylists(await getPlaylists());
  };


  return (
    <>
      <div className='text-white font-semibold text-sm ml-4 flex-1 justify-center truncate'>
        {props.movie.movieName}
      </div>
      <div className='relative'>
        <MdPlaylistAdd
          size={30}
          className='text-black font-semibold bg-white rounded-full shadow-2xl shadow-black mr-2 mt-1 mb-1 cursor-pointer hover:cursor-pointer'
          // onClick={toggleMenu}
        />
        {isMenuOpen && (
                <AddToPlaylistMenu playlists={playlists} movie={props.movie} onToggleMenu={toggleMenu}/>
        )}
      </div>
    </>
  )
}

export default BottomMovieHover