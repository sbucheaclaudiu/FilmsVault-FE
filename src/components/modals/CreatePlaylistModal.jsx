import React, { useEffect, useState, useRef } from 'react'
import Input from '../utils/Input';
import Button from '../utils/Button';
import toast from 'react-hot-toast';
import "../styleComponents.css"
import Textarea from '../utils/Textarea';
import { createPlaylist } from '../../api/Playlist';
import Modal from './Modal';


function CreatePlaylistModal(props) {

    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const [playlistName, setPlaylistName] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [privatePlaylist, setPrivatePlaylist] = useState(false);

    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        console.log(file);

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setPhoto(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handlePrivatePlaylist = () => {
        setPrivatePlaylist(!privatePlaylist);
    };


    const reset = () => {
        setPlaylistName('');
        setDescription('');
        setPrivatePlaylist(false);
        setPhoto(null);
    }

    const onClose = () => {
        reset();
        props.setIsOpenModal(false);
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        if(playlistName == 'Watched' || playlistName == "Watchlist") {
            toast.error("Playlist name can't be " + playlistName);
        }
        else if (playlistName != '') {
            try {
                setIsLoading(true);
                const result = await createPlaylist(playlistName, description, photo, privatePlaylist);

                if (result == "Failed to create playlist.") {
                    throw Error;
                }

                toast.success("Playlist created.");
                props.onPlaylistCreated();

            } catch (error) {
                toast.error("Something went wrong.(The uploaded image format is not supported.");
            } finally {
                setIsLoading(false);
                onClose();
            }
        }
        else {
            toast.error("Playlist name can't be null.");
        }
    }

    return (
        <Modal {...props} 
               setIsOpenModal={props.setIsOpenModal}
        >
            <div>
                <form className='flex flex-col gap-y-4'>

                    <div className='flex gap-x-4 mb-4'>

                        <div className="image-upload-container">
                            <label htmlFor="photo" className="cursor-pointer bg-neutral-700 text-neutral-400 rounded-md">
                                <input
                                    type="file"
                                    id="photo"
                                    onChange={handlePhotoChange}
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    ref={fileInputRef}
                                />
                                Choose photo
                            </label>
                            {photo && (
                                <div className="preview cursor-pointer hover:opacity-20 transition-opacity hover:brightness-50 relative" onClick={handleImageClick}>
                                    <img src={photo}
                                        alt="Selected"
                                        className="preview-image w-full h-full object-cover filter rounded-md"
                                    />
                                </div>
                            )}
                        </div>

                        <div className='flex flex-col gap-y-8'>
                            <Input
                                id="playlistName"
                                disabled={isLoading}
                                placeholder="Playlist name"
                                onChange={handlePlaylistNameChange}
                                required
                            />
                            <Textarea
                                id="description"
                                disabled={isLoading}
                                placeholder="Description"
                                onChange={handleDescriptionChange}
                            />
                        </div>
                    </div>

                    <div className='flex justify-end items-center mb-4 mt-[-10px]'>
                        <input
                            id="privatePlaylist"
                            disabled={isLoading}
                            onChange={handlePrivatePlaylist}
                            type="checkbox"
                            className='
                                        before:content ["✓"]
                                        form-checkbox
                                        border-[1px]
                                        border-neutral-400 
                                        appearance-none 
                                        w-5 h-5 
                                        cursor-pointer 
                                        rounded-full
                                        bg-neutral-600
                                        checked:bg-rose-600 
                                        hover:scale-110'
                        />
                        <label htmlFor="privatePlaylist" className='pl-2 text-neutral-400'>
                            Private Playlist
                        </label>
                    </div>

                    <div>
                        <Button
                            text="Create"
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

export default CreatePlaylistModal