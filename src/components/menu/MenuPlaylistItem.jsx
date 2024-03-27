import React, { useState } from 'react'
import AddToPlaylistModal from '../modals/AddToPlaylistModal';

function MenuPlaylistItem(props) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAdd = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <button onClick={handleAdd} 
            className='
                text-sm
                block 
                w-full 
                py-[10px]
                px-[12px]
              text-white
                text-left
              hover:bg-neutral-600
                hover:rounded-sm
                font-[550]
                truncate
              '>
                {props.playlist.name}
      </button>
      {isOpenModal && <AddToPlaylistModal 
                            setIsOpenModal={setIsOpenModal}
                            title={
                              props.movie.type === "movie"
                                ? props.movie.movieName + " (" + props.movie.releaseDate.slice(0, 4) +")"
                                : props.movie.type === "tv"
                                  ? props.movie.movieName + " (" + props.movie.firstAirDate.slice(0, 4) +")"
                                  : ""
                            }
                            description=""
                            movie={props.movie}
                            playlist={props.playlist}
                            onToggleMenu={props.onToggleMenu}
                            modalRef={props.modalRef}
                        />
        }
    </>
  )
}

export default MenuPlaylistItem