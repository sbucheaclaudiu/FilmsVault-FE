import React, { useState, useEffect, useRef } from 'react'
import { MdOutlineDownloading } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { TiArrowShuffle } from "react-icons/ti";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IoTrashBin } from "react-icons/io5";
import { RiListUnordered } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
import SearchInput from './SearchInput';
import DeletePlaylistModal from '../modals/DeletePlaylistModal';
import { MdEdit } from "react-icons/md";
import { deletePlaylist } from '../../api/Playlist';
import ModifyPlaylistModal from '../modals/ModifyPlaylistModal';
import RandomMovieModal from '../modals/RandomMovieModal';
import { getUser } from '../../auth/AuthContext';


function TopContent(props) {
    const initialMovie = {
        dateAdded: "",
        genres: "",
        movieId: 0,
        movieName: "",
        posterPath: "",
        releaseDate: "",
        tmdbId: 0,
        type: "",
        userNote: "",
        userRating: 0
      };

    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const [user, setUser] = useState(null);
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
    
    const [randomMovie, setRandomMovie] = useState(initialMovie);

    const sortMenuRef = useRef(null);
    const moreMenuRef = useRef(null);

    const [activeButton, setActiveButton] = useState('dateAdded');

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModifyPlaylistModal, setisOpenModifyPlaylistModal] = useState(false);
    const [isOpenRandomMovieModal, setisOpenRandomMovieModal] = useState(false);

    const onDeletePlaylist = () => {
        setIsOpenModal(true);
      }

    const onModifyButton = () => {
        setisOpenModifyPlaylistModal(true);
    }

    const onPlaylistUpdated = async (id) => {
        // const playlistInfo = await getPlaylistById(id);
        // const moviesFetch = await getMovieFromPlaylist(id);
    
        // navigate(`/playlist/${playlistInfo.name}${playlistInfo.id}`, { state: { playlist: playlistInfo, moviesList: moviesFetch} });
    
        navigate('/home');
      
      }

    function downloadTxtFile(text, fileName) {
        // Creează un obiect Blob cu conținutul textului
        const blob = new Blob([text], { type: 'text/plain' });
    
        // Creează un URL pentru obiectul Blob
        const url = URL.createObjectURL(blob);
    
        // Creează un element <a> pentru a descărca fișierul
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
    
        // Adaugă elementul <a> la DOM
        document.body.appendChild(link);
    
        // Simulează un clic pe elementul <a> pentru a declanșa descărcarea
        link.click();
    
        // Elimină elementul <a> din DOM
        document.body.removeChild(link);
    }

    const onDownloadTxt = () => {
        let moviesInfo = '';
        let no = 0;

        props.moviesList.forEach(movie => {
        moviesInfo += `${no}. ${movie.movieName} (${movie.releaseDate})\n`;
        no = no + 1;
        });

        const fileName = props.playlist.name + '_Movies.txt';

        downloadTxtFile(moviesInfo, fileName);
    }

    const handleSearchClick = () => {
        setIsVisible(true);
    };

    const toggleSortMenu = () => {
        setIsSortMenuOpen(!isSortMenuOpen);
    };

    const toggleMoreMenu = () => {
        setIsMoreMenuOpen(!isMoreMenuOpen);
    };

    const getRandomMovie = () => {
        const randomIndex = Math.floor(Math.random() * props.moviesList.length);
        console.log(props.moviesList[randomIndex]);
        setRandomMovie(props.moviesList[randomIndex])
        setisOpenRandomMovieModal(true);
    }
    
    const sortByName = () => {
        setActiveButton('name');
        props.sortByName();
        setIsSortMenuOpen(false);
    }

    const sortByDateAdded = () => {
        setActiveButton('dateAdded');
        props.sortByDateAdded();
        setIsSortMenuOpen(false);
    }

    const goToMainPage = () => {
        navigate(`/home`);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
                setIsSortMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
                setIsMoreMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        console.log("use");
        const currentUser = getUser();
        if (currentUser) {
            setUser(currentUser);
        }
      }, []);

    return (
        <div className='
                opacity-1
                mt-4
                flex
                items-center
                w-full
                relative
        '>
            <div className='flex justify-content-start items-center space-x-4'>
                <MdOutlineDownloading onClick={onDownloadTxt}
                    size={32}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                '/>
                <TiArrowShuffle onClick={() => { }}
                    size={32}
                    className='
                    text-neutral-400
                    cursor-not-allowed
                    hover:text-white
                    transition
                '/>
                <GiPerspectiveDiceSixFacesRandom onClick={getRandomMovie}
                    size={32}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                '/>
                <button disabled={user && props.playlist.playlistUsername != user.username}>
                    <IoTrashBin onClick={onDeletePlaylist}
                    size={30}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                    '/>
                </button>
                <SlOptions onClick={toggleMoreMenu}
                    size={32}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                '/>
            </div>

            {isMoreMenuOpen && 
                (<div ref={moreMenuRef}
                      className="absolute
                       left-48
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
                        onClick={onDeletePlaylist}
                        disabled={user && props.playlist.playlistUsername != user.username}
                        className={`text-md w-full py-2 px-[12px] text-left hover:bg-neutral-600 hover:rounded-sm flex text-md items-center`}
                    >
                        Delete
                        <IoTrashBin size={20} className='text-neutral-400 ml-auto'/>
                    </button>
                    <button 
                        disabled={user &&props.playlist.playlistUsername != user.username}
                        onClick={onModifyButton}
                        className={`text-md w-full py-2 px-[12px] text-left hover:bg-neutral-600 hover:rounded-sm flex text-md items-center border-b-[1px] border-neutral-600`}
                    >
                        Edit playlist
                        <MdEdit size={20} className='text-neutral-400 ml-auto'/>
                    </button>
                    <button 
                        onClick={getRandomMovie}
                        className={`text-md w-full py-2 px-[12px] text-left hover:bg-neutral-600 hover:rounded-sm flex text-md items-center`}
                    >
                        Random
                        <GiPerspectiveDiceSixFacesRandom size={20} className='text-neutral-400 ml-auto'/>
                    </button>
                    <button 
                        onClick={onDownloadTxt}
                        className={`text-md w-full py-2 px-[12px] text-left hover:bg-neutral-600 hover:rounded-sm flex text-md items-center`}
                    >
                        Download .txt
                        <MdOutlineDownloading size={20} className='text-neutral-400 ml-auto'/>
                    </button>
                </div>
                )}

            {isOpenModal && <DeletePlaylistModal 
                            setIsOpenModal={setIsOpenModal}
                            title="Are you sure you want to delete this playlist ?"
                            description=""
                            playlistName={props.playlist.name}
                            playlistId={props.playlist.id}
                            goToMainPage={goToMainPage}
                        />
            }

            <div className='flex justify-content-end w-full items-center space-x-8 relative'>
                {isVisible ? (
                    <SearchInput
                        setIsVisible={setIsVisible}
                        searchValue={props.searchValue}
                        setSearchValue={props.setSearchValue}
                        isVisible={isVisible}
                    />
                ) : (<IoSearch onClick={handleSearchClick}
                    size={24}
                    className='
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                    '/>
                )}
                <button
                    onClick={toggleSortMenu}
                    className='
                        flex
                      text-neutral-400
                      hover:text-white
                        transition
                        items-center
                '>
                    Sort by
                    <RiListUnordered
                        size={23}
                        className='ml-3'
                    />
                
                </button>
                {isSortMenuOpen && 
                (<div ref={sortMenuRef}
                      className="absolute
                       font-bold
                       right-0 
                       top-full 
                       mt-2 
                       w-48
                       bg-neutral-800 
                       rounded-md 
                       shadow-lg 
                       z-10
                       p-[7px]
                       text-neutral-400
                       ">
                    <button 
                        onClick={sortByName}
                        className={`text-md w-full py-2 px-[12px] text-left hover:bg-neutral-600 hover:rounded-sm flex text-md items-center border-b-[1px] border-neutral-600 ${activeButton === 'name' ? 'text-white' : ''}`}
                    >
                            Name
                            {activeButton == "name" && <FaCheck size={20} className='ml-auto'/>}
                    </button>
                    <button 
                        onClick={sortByDateAdded}
                        className={`text-md w-full py-2 px-[12px] text-left hover:bg-neutral-600 hover:rounded-sm flex text-md items-center ${activeButton === 'dateAdded' ? 'text-white' : 'text-neutral-500'}`}
                    >
                            Date added
                            {activeButton == "dateAdded" && <FaCheck size={20} className='ml-auto'/>}
                    </button>
                </div>
                )}
            </div>
            {isOpenModifyPlaylistModal && <ModifyPlaylistModal 
                            setIsOpenModal={setisOpenModifyPlaylistModal}
                            title="Edit Playlist Details"
                            description=""
                            onPlaylistUpdated={onPlaylistUpdated}
                            photo={props.playlist.imagePath}
                            name={props.playlist.name}
                            descr={props.playlist.description}
                            privatePlaylist={props.playlist.privatePlaylist}
                            id={props.playlist.id}
                            //description="Save and organize genre-specific movies effortlessly in your custom playlist."
                        />
        }

                {isOpenRandomMovieModal && <RandomMovieModal 
                            setIsOpenModal={setisOpenRandomMovieModal}
                            title="Random Movie to Watch"
                            description=""
                            movie={randomMovie}
                        />
        }
        </div>
    )
}

export default TopContent