import React, { useEffect, useState, useRef } from 'react'
import * as Dialog from "@radix-ui/react-dialog"
import { IoMdClose } from 'react-icons/io'
import Input from '../utils/Input';
import Button from '../utils/Button';
import toast from 'react-hot-toast';
import { getUser } from '../../auth/AuthContext';
import "../styleComponents.css"
import Textarea from '../utils/Textarea';
import { createPlaylist, updatePlaylist } from '../../api/Playlist';
import Modal from './Modal';


function ModifyPlaylistModal(props) {

    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const [playlistNameOld, setPlaylistNameOld] = useState(props.name || '');
    const [playlistName, setPlaylistName] = useState(props.name || '');
    const [description, setDescription] = useState(props.descr || '');
    const [photo, setPhoto] = useState(props.photo || null);
    const [privatePlaylist, setPrivatePlaylist] = useState(props.privatePlaylist || false);

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

    console.log(playlistName);

    const onSubmit = async (event) => {
        event.preventDefault();

        if (playlistNameOld == 'Watchlist' || playlistNameOld == 'Watched') {
            toast.error("Can't edit Watchlist or Watched");
        }
        else if (playlistName != '') {
            try { 
                setIsLoading(true);
                const result = await updatePlaylist(props.id, playlistName, description, photo, privatePlaylist);

                if(result == "Failed to update playlist."){
                    throw Error;
                }

                toast.success("Playlist updated.");
                props.onPlaylistUpdated(props.id);

            } catch (error) {
                toast.error("Something went wrong.");
            } finally {
                setIsLoading(false);
                onClose();
            }
        }
        else{
            toast.error("Playlist name can't be null.");
        }
    }

    return (
        <Modal
            {...props} 
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
                                        value={playlistName}
                                    />
                                    <Textarea
                                        id="description"
                                        disabled={isLoading}
                                        placeholder="Description"
                                        onChange={handleDescriptionChange}
                                        value={description}
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
                                    checked={privatePlaylist}
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

export default ModifyPlaylistModal;