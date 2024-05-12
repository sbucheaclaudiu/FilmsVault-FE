import React, { useEffect, useState, useRef } from 'react'
import Input from '../utils/Input';
import Button from '../utils/Button';
import toast from 'react-hot-toast';
import "../styleComponents.css"
import Textarea from '../utils/Textarea';
import { createPlaylist, deletePlaylist } from '../../api/Playlist';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import { getDetails } from '../../api/GetDetails';

function RandomMovieModal(props) {

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const onClose = () => {
        props.setIsOpenModal(false);
    }

    const onMovie = async () => {
        const details = await getDetails(props.movie.type, props.movie.movieId);

        if(props.movie.type === "movie"){
            navigate(`/movie/${props.movie.movieName.replace(/\s/g, "")}`, { state: { movie: details } });
          }
          else if(props.movie.type === "tv"){
            navigate(`/tvShow/${props.movie.movieName.replace(/\s/g, "")}`, { state: { movie: details } });
          }
          else if(props.movie.type === "person"){
            navigate(`/person/${props.movie.movieName.replace(/\s/g, "")}`, { state: { person: details } });
          }

        onClose();
    }

    console.log(props.movie);

    return (
        <Modal {...props} 
               setIsOpenModal={props.setIsOpenModal}
        >
            <div className='flex flex-col items-center'>
                <img src={props.movie.posterPath} alt={props.movie.movieName} className='w-44 h-46 cursor-pointer object-cover rounded-lg mb-2 hover:opacity-50' onClick={onMovie} />
                <h2 className='text-white text-lg cursor-pointer font-semibold text-center hover:text-xl hover:underline mt-2' onClick={onMovie}>{props.movie.movieName}</h2>
                <h3 className='text-neutral-500 text-sm font-semibold text-center'>({props.movie.releaseDate})</h3>
            </div>
        </Modal>
    )
}

export default RandomMovieModal