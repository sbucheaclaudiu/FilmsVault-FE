import React, { useEffect, useState, useRef } from 'react'
import Input from '../utils/Input';
import Button from '../utils/Button';
import toast from 'react-hot-toast';
import "../styleComponents.css"
import Modal from './Modal';
import { getUserById, updateUser } from '../../api/Account';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../auth/AuthContext';


function ModifAccountModal(props) {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const [name, setName] = useState(props.name || '');
    const [email, setEmail] = useState(props.email || '');
    const [photo, setPhoto] = useState(props.photo);
    const [username, setUsername] = useState(props.username);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
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


    const reset = () => {
        setName('');
        setEmail('');
        setPhoto(null);
    }

    const onClose = async () => {
        reset();
        props.setIsOpenModal(false);
        const user = getUser();

        const userDetails = await getUserById(user.id);

        navigate(`/account/${userDetails.username}`, { state: { user: userDetails} });
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        if(email == '' || name == '') {
            toast.error("Email or name can't be null");
        }
        else {
            try {
                setIsLoading(true);
                const result = await updateUser(props.id, props.username, name, email, photo);
                console.log(result);

                if (result == "Invalid email!" || result == "Email already used!" || result == "Failed to update account!") {
                    toast.error(result);
                    throw Error;
                }

                toast.success("Account updated.");

                setIsLoading(false);
                onClose();

            } catch (error) {
                
            } finally {
                
            }
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
                            <label htmlFor="photo" className="cursor-pointer bg-neutral-700 text-neutral-400 rounded-xl">
                                <input
                                    type="file"
                                    id="photo"
                                    onChange={handlePhotoChange}
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    ref={fileInputRef}
                                    className='rounded-xl'
                                />
                                Choose photo
                            </label>
                            {photo && (
                                <div className="preview cursor-pointer hover:opacity-20 transition-opacity hover:brightness-50 relative" onClick={handleImageClick}>
                                    <img src={photo}
                                        alt="Selected"
                                        className="preview-image w-full h-full object-cover filter rounded-xl"
                                    />
                                </div>
                            )}
                        </div>

                        <div className='flex flex-col gap-y-4 justify-center'>
                            <div className='text-md text-white mb-[-12px] font-bold text-center'>
                                Name
                            </div>
                            <Input
                                id="name"
                                disabled={isLoading}
                                placeholder="Name"
                                onChange={handleNameChange}
                                required
                                value={name}
                            />
                            <div className='text-md text-white mb-[-12px] font-bold text-center'>
                                Username
                            </div>
                            <Input
                                id="username"
                                disabled={true}
                                placeholder="Username"
                                onChange={handleUsernameChange}
                                required
                                value={username}
                            />
                        </div>
                    </div>

                    <div>
                        <div className='text-md mx-8 mb-4 mt-[-20px] text-center'>
                            <div className='text-white font-bold'>
                                Email
                            </div>
                            <Input
                                id="email"
                                disabled={true}
                                placeholder="Email"
                                onChange={handleEmailChange}
                                required
                                value={email}
                            />
                        </div>
                        <Button
                            text="Update account"
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

export default ModifAccountModal