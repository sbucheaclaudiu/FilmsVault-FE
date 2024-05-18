import React from 'react'
import "../styleComponents.css"
import BottomMovieHover from './BottomMovieHover'
import MovieItem from './MovieItem'
import PlaylistItem from './PlaylistItem'

function PlaylistList(props) {

    const addToPlaylist = () => {
        //handle ADD TO PLAYLIST
      }

  return (
    <>
        {props.playlists.map((playlist) => (
            <PlaylistItem 
                key={playlist.id}
                playlist={playlist}
            />
        ))}
    </>
  )
}

export default PlaylistList;