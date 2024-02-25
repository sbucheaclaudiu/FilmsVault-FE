import React, { useEffect, useState, useRef } from 'react'
import * as Dialog from "@radix-ui/react-dialog"
import { IoMdClose } from 'react-icons/io'
import Input from '../utils/Input';
import Button from '../utils/Button';
import toast from 'react-hot-toast';
import { getUser } from '../../auth/AuthContext';
import "../styleComponents.css"
import Textarea from '../utils/Textarea';
import { createPlaylist } from '../../api/Playlist';
import { uploadImage } from '../../api/uploadImage';


function ModifyPlaylistModal(props) {

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
        setPrivatePlaylist(true);
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

        if (playlistName != '') {
            try { 
                setIsLoading(true);
                const result = await createPlaylist(playlistName, description, photo, privatePlaylist);

                if(result == "Failed to create playlist."){
                    throw Error;
                }

                toast.success("Playlist created.");
                props.onPlaylistCreated();

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
        <Dialog.Root
            open={"isOpen"}
        >
            <Dialog.Portal>
                <Dialog.Overlay
                    className='
                    bg-neutral-900/80
                    backdrop-blur-sm
                    fixed
                    inset-0
                    !z-40
                '
                />
                <Dialog.Content
                    className='
                    fixed
                    drop-shadow-md
                    border-[2px]
                    border-neutral-700
                    top-[50%]
                    left-[50%]
                    max-h-full
                    h-full
                    md:h-auto
                    md:max-h-[85vh]
                    w-full
                    md:w-[90vh]
                    md:max-w-[450px]
                    translate-x-[-50%]
                    translate-y-[-50%]
                    rounded-md
                    bg-neutral-800
                    p-[25px]
                    focus:outline-none
                    !z-50 
            '>
                    <Dialog.Title
                        className='
                        text-xl
                        text-center
                        font-bold
                        mb-4
                        text-white
                    '>
                        {props.title}
                    </Dialog.Title>
                    <Dialog.Description
                        className='
                        mb-5
                        text-sm
                        leading-normal
                        text-center
                        text-white
                        font-semibold
                '>
                        {props.description}
                    </Dialog.Description>

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
                                        checked:bg-green-500 
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

                    <Dialog.Close asChild>
                        <button
                            onClick={onClose}
                            className='
                            text-neutral-400
                            hover:text-white
                            absolute
                            top-[10px]
                            right-[10px]
                            inline-flex
                            h-[25px]
                            w-[25px]
                            appearence-none
                            items-center
                            justify-center
                            rounded-full
                            focus:outline-none
                        '>
                            <IoMdClose />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default ModifyPlaylistModal;