import React, { useState, useEffect, useRef } from 'react'
import { IoMdStarOutline } from "react-icons/io";
import { MdPlaylistAdd } from "react-icons/md";
import AddToPlaylistMenu from '../menu/AddToPlaylistMenu';
import { getPlaylists } from '../../api/Playlist';

function HeaderContent(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const toggleMenu = (event) => {
    setPlaylistsAvailable();
    setIsMenuOpen(!isMenuOpen);
    if(event != null){
        event.stopPropagation();
    }
  };

  const setPlaylistsAvailable = async () => {
    setPlaylists(await getPlaylists());
  };


    return (
        <div className='mt-10'>
            <div className='
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        gap-x-5
                '>
                <div className='
                            relative
                            h-68
                            w-48
                            rounded-xl
                            overflow-hidden
                            min-w-0
                            flex-shrink-0
                    '>
                    <img
                        src={props.movie.posterPath.endsWith("null") ? `${process.env.PUBLIC_URL}/posterNotFound.jpg` : props.movie.posterPath}
                        alt="playlist photo"
                        className='h-full w-full shadow-xl'
                    />
                </div>

                <div className='
                            flex
                            flex-col
                            gap-y-2
                            mt-4
                            md:mt-0
                            w-full
                    '>
                    {props.movie.type === "movie" && <div className='hidden md:block font-semibold text-sm text-white'>
                        MOVIE
                    </div>
                    }

                    {props.movie.type === "tv" && <div className='hidden md:block font-semibold text-sm text-white'>
                        TV SHOW
                    </div>
                    }
                    
                    <h1 className='
                                text-white
                                text-4xl
                                sm:text-5xl
                                lg:text-7xl
                                font-semibold
                                mb-4
                                mt-2
                        '>
                        {props.movie.movieName}
                    </h1>

                    {props.movie.type === "movie" && <div className='
                              text-white
                                text-xl
                                font-semibold
                                flex
                                items-center
                        '>
                        {props.movie.releaseDate.slice(0, 4)}&nbsp;&nbsp;•&nbsp;&nbsp;{props.movie.runtime} minutes&nbsp;&nbsp;
                    </div> 
                    }

                    {props.movie.type === "tv" && <div className='
                              text-white
                                text-xl
                                font-semibold
                                flex
                                items-center
                        '>
                        {props.movie.firstAirDate.slice(0, 4)} - {props.movie.lastAirDate.slice(0, 4)}&nbsp;&nbsp;•&nbsp;&nbsp;{props.movie.noofSeasons}&nbsp;seasons &nbsp;&nbsp;•&nbsp;&nbsp;{props.movie.noOfEpisods} ep
                    </div> 
                    }

                    <div className='
                              text-white
                                text-xl
                                font-semibold
                                flex
                                items-center
                                relative
                                !z-30
                        '>
                        {props.movie.genres}
                        <MdPlaylistAdd
                            size={40}
                            className='text-black font-semibold bg-white rounded-full shadow-2xl shadow-black absolute end-24 cursor-pointer hover:cursor-pointer'
                            onClick={toggleMenu}
                        />
                        {isMenuOpen && (
                            <AddToPlaylistMenu playlists={playlists} movie={props.movie} onToggleMenu={toggleMenu}/>
                        )}
                    </div>

                    <div className="flex items-center">
                        <IoMdStarOutline size={26} className='text-yellow-300 mr-2'/>
                        <div className='text-xl text-white font-semibold'>
                            {props.movie.rating} 
                            <span className='text-sm'> / 10 </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderContent