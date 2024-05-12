import React, { useEffect, useState, useRef } from 'react'
import Modal from './Modal';
import Button from '../utils/Button';
import toast from 'react-hot-toast';
import "../styleComponents.css"
import Textarea from '../utils/Textarea';
import Rating from 'react-rating';
import { addMovieToPlaylist } from '../../api/AddRemoveMovie';
import "../styleComponents.css"


function AddToPlaylistModal(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState('');
  const [hoverRating, setHoverRating] = useState(1);


  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
};

  const handleHoverRating = (value) => {
    setHoverRating(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await addMovieToPlaylist(props.movie, rating, description, props.playlist.id);

      if(result.successful){
        toast.success(result.message);
      }
      else{
        toast.error(result.message);
      }

    } catch (error) {
      toast.error("Something went wrong.");

    } finally {
      setIsLoading(false);
      onClose();
    }

  }

  const onClose = () => {
    props.setIsOpenModal(false);
    props.onToggleMenu();
  }

  const getRatingMessage = () => {
    const displayRating = hoverRating > 0 ? hoverRating : rating;

    switch (displayRating) {
      case 0.5:
        return 'useless';
      case 1:
        return 'useless+';
      case 1.5:
        return 'poor';
      case 2:
        return 'poor+';
      case 2.5:
        return 'ok';
      case 3:
        return 'ok+';
      case 3.5:
        return 'good';
      case 4:
        return 'good+';
      case 4.5:
        return 'excelent';
      case 5:
        return 'excelent+';
      default:
        return '';
    }
  };

  return (
    <Modal
      {...props}
      setIsOpenModal={props.setIsOpenModal}
    >
      <div ref={props.modalRef}>
        <form className='mt-[-10px]'>
          <div className='flex flex-row gap-x-4 mb-5'>
            <div className='
                            relative
                            h-40
                            w-28
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
            <div className='flex flex-col justify-center w-full'>
              <Textarea
                id="note"
                disabled={isLoading}
                placeholder="Note"
                onChange={handleDescriptionChange}
              />
            </div>
          </div>

          <div className='flex ml-8 items-center mb-5'>
            <div className='text-xl mr-4 text-white font-semibold mt-[-6px]'>
              Rating:
            </div>
            <Rating
              initialRating={rating}
              emptySymbol={<span className="icon">&#9734;</span>}
              fullSymbol={<span className="icon">&#9733;</span>}
              className='text-3xl mb-2 text-yellow-300'
              onClick={handleRating}
              onMouseOver={handleRating}
              onHover={handleHoverRating}
              fractions={2}
            />
            <div className="ml-4 text-md text-white mt-[-6px]">
              ({getRatingMessage()})
            </div>

          </div>

          <div>
            <Button
              text={"Add to " + props.playlist.name}
              onClick={onSubmit}
              type="submit"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default AddToPlaylistModal