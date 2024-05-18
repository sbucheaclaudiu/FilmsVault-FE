import React, { useState } from 'react'
import BiographyModal from '../modals/BiographyModal';
import EditButton from './EditButton';
import ModifAccountModal from '../modals/ModifAccountModal';
import { FaUserEdit } from "react-icons/fa";
import DeleteAccountModal from '../modals/DeleteAccountModal';
import { useNavigate } from 'react-router-dom';

function HeaderContent(props) {
    const navigate = useNavigate();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const onEditAccount = () => {
        setIsOpenModal(true);
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };


    console.log(props.user);

    return (
        <div className='mt-10'>
            <div className='
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        gap-x-5
                '>
                <div
                    className={`relative h-48 w-48 rounded-full overflow-hidden min-w-0 flex-shrink-0 shadow-xl 
                    ${isHovered ? 'filter brightness-50' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={onEditAccount}
                >

                    {props.user.profileUrl == "" && 
                    <img
                        src={`${process.env.PUBLIC_URL}/account.svg`}
                        alt="profile"
                        className='h-full w-full shadow-xl'
                        style={{ objectFit: 'cover' }}
                    />}
                    {props.user.profileUrl != "" && 
                    <img
                        src={`${props.user.profileUrl}`}
                        alt="profile"
                        className='h-full w-full shadow-xl'
                        style={{ objectFit: 'cover' }}
                    />}
                    {isHovered && (
                      <div className="absolute inset-0 flex flex-col justify-center items-center">
                          <FaUserEdit size={50} className='text-white'/>
                          
                      </div>
                    )}
                </div>

                <div className='
                            flex
                            flex-col
                            gap-y-2
                            mt-4
                            md:mt-0
                    '>
                    <div className='hidden md:block font-semibold text-sm text-white'>
                        Profile
                    </div>
                    <h1 className='
                                text-white
                                text-4xl
                                sm:text-5xl
                                lg:text-6xl
                                font-semibold
                                mb-2
                                mt-2
                                w-full
                                truncate
                        '>
                        {props.user.name}
                    </h1>
                    <div className='
                              text-white
                                text-xl
                                font-semibold
                                flex
                                items-center
                                relative
                        '>
                        {props.user.noPublicPlaylists} Public playlists&nbsp;&nbsp;•&nbsp;&nbsp;{props.user.noFollowers} Followers&nbsp;&nbsp;•&nbsp;&nbsp;{props.user.noFollowing} Following
                    </div>
                    {isOpenModal && <ModifAccountModal 
                            setIsOpenModal={setIsOpenModal}
                            title="Update Your Account"
                            description=""
                            email={props.user.email}
                            name={props.user.name}
                            username={props.user.username}
                            photo={props.user.profileUrl}
                            id={props.user.id}
                            //description="Save and organize genre-specific movies effortlessly in your custom playlist."
                        />
                }   
                </div>
            </div>
        </div>
    )
}

export default HeaderContent