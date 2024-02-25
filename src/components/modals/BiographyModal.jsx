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


function BiographyModal(props) {

    const onClose = () => {
        props.setIsOpenModal(false);
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
                    top-[45%]
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
                        {props.title} - Biography
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
                        
                    </Dialog.Description>

                    <div className='
                            overflow-y-auto 
                            max-h-[300px]
                            text-white
                    '>
                            {props.person.biography}
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

export default BiographyModal