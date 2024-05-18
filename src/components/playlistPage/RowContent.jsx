import React, { useState, useEffect, useRef } from 'react'
import "../styleComponents.css"
import { IoIosMore } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai'
import { TiChevronRight } from "react-icons/ti";
import { IoMdStarOutline } from "react-icons/io";
import { FiTrash } from "react-icons/fi";
import { getDetails } from '../../api/GetDetails';
import { removeMovieFromPlaylist } from '../../api/AddRemoveMovie';
import { LuMoveRight } from "react-icons/lu";
import { getUser } from '../../auth/AuthContext';


function RowContent(props) {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const removeMovie = async () => {
        const response = await removeMovieFromPlaylist(props.movie.movieId, props.playlist.id);
        props.fetchMovies();
    };

    const handleClick = async () => {
        const details = await getDetails(props.movie.type, props.movie.tmdbId);
        
        if(props.movie.type === "movie"){
          navigate(`/movie/${props.movie.movieName.replace(/\s/g, "")}`, { state: { movie: details } });
        }
        else if(props.movie.type === "tv"){
          navigate(`/tvShow/${props.movie.movieName.replace(/\s/g, "")}`, { state: { movie: details } });
        }
        else if(props.movie.type === "person"){
          navigate(`/person/${props.movie.movieName.replace(/\s/g, "")}`, { state: { person: details } });
        }
      }

      useEffect(() => {
        const currentUser = getUser();
        setUser(currentUser);
      }, []); 
    

      useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <tr onClick={handleClick} key={props.index} className='hover:bg-neutral-600/20 hover-bg-rounded relative'>
            <td className="row-table-playlist w-10 text-xl">{props.index + 1}</td>
            <td className="row-table-playlist flex">
                <img src={props.movie.posterPath} alt="Poster" className="w-14 h-14 rounded-md object-cover min-w-14 max-h-14" />
                <div className='ml-4 row-table-name items-center content-center text-white text-xl'>
                    {props.movie.movieName}
                    <div className='text-sm text-neutral-400 font-semibold'>{props.movie.releaseDate}</div>
                </div>
            </td>
            <td className="row-table-note text-md">{props.movie.userNote}</td>
            <td className="row-table-playlist text-md items-center">
                <div className="flex items-center">
                        <div className='text-md font-semibold text-white'>
                            {props.movie.userRating} 
                            <span className='text-xs text-neutral-400 pl-[2px]'> / 10 </span>
                        </div>
                    </div>
            </td>
            <td className="row-table-playlist text-xs">{props.movie.dateAdded}</td>
            <td className="row-table-more">
                <button>
                    <IoIosMore size={20}
                    className='cursor-pointer hover:text-white hover:scale-120 transform transition'
                    onClick={(event) => {
                        event.stopPropagation(); 
                        if (props.playlist.playlistUsername == user.username) {
                            toggleMenu(); 
                        }
                    }}
                    />
                </button>
                {isMenuOpen && (
                    <div ref={menuRef}
                         className="absolute
                            right-0 
                            top-full 
                            mt-2 
                            w-48
                            bg-neutral-800 
                            rounded-md 
                            shadow-lg 
                            z-10
                            p-[7px]
                            text-white
                            ">
                        
                        <button 
                            onClick={(event) => {
                                event.stopPropagation(); 
                                removeMovie(); 
                            }}
                            className="
                                text-md 
                                w-full 
                                py-2
                                px-[12px]
                                text-left
                              hover:bg-neutral-600
                                hover:rounded-sm
                                flex
                                text-md
                                items-center
                                ">
                            <FiTrash size={20} className='mr-2'/>
                            Remove
                        </button>
                        {props.playlist.name == "Watchlist" && 
                            <button 
                            onClick={(event) => {
                                event.stopPropagation(); 
                                 
                            }}
                            className="
                                text-md 
                                w-full 
                                py-2
                                px-[12px]
                                text-left
                              hover:bg-neutral-600
                                hover:rounded-sm
                                flex
                                text-md
                                items-center
                                border-t-[1px] border-neutral-600
                                ">
                            <LuMoveRight size={20} className='mr-2'/>
                            Move to Watched
                        </button>
                        }
                    </div>
                )}
            </td>
        </tr>
    );
}

export default RowContent