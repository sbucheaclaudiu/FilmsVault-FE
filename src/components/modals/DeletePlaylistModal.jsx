import React, { useEffect, useState, useRef } from 'react'
import Input from '../utils/Input';
import Button from '../utils/Button';
import toast from 'react-hot-toast';
import "../styleComponents.css"
import Textarea from '../utils/Textarea';
import { createPlaylist, deletePlaylist } from '../../api/Playlist';
import Modal from './Modal';

function DeletePlaylistModal(props) {

    const [isLoading, setIsLoading] = useState(false);

    const onClose = () => {
        props.setIsOpenModal(false);
    }

    const onDelete = async (event) => {
        event.preventDefault();

        if(props.playlistName == 'Watched' || props.playlistName == "Watchlist") {
            toast.error("Playlist " + props.playlistName + " can't be deleted.");
        }
        else {
            try {
                setIsLoading(true);
                const result = await deletePlaylist(props.playlistId)

                if (result == false) {
                    throw Error;
                }

                props.goToMainPage();
                toast.success("Playlist deleted.");

            } catch (error) {
                toast.error("Something went wrong.");
            } finally {
                setIsLoading(false);
                onClose();
            }
        }
    }

    return (
        <Modal {...props} 
               setIsOpenModal={props.setIsOpenModal}
        >
            <div>
                <form className='flex flex-col gap-y-4'>
                    <div className='flex'>
                        <Button
                            text="No"
                            onClick={onClose}
                            type="submit"
                            disabled={isLoading}
                            className='
                            w-full 
                            rounded-full 
                             bg-neutral-600
                            border
                            border-transparent
                            px-3 
                            py-3 
                            disabled:cursor-not-allowed 
                            disabled:opacity-50
                             text-white
                            font-bold
                            hover:opacity-75
                            transition
                            mr-4'
                            
                        />
                        <Button
                            text="Yes"
                            onClick={onDelete}
                            type="submit"
                            disabled={isLoading}
                        />
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default DeletePlaylistModal