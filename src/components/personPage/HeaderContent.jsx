import React, { useState } from 'react'
import { IoMdStarOutline } from "react-icons/io";
import BiographyModal from '../modals/BiographyModal';
import CreatePlaylistModal from '../modals/CreatePlaylistModal';

function HeaderContent(props) {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const onClickBiography = () => {
        setIsOpenModal(true);
    }

    return (
        <div className='mt-10'>
            <div className='
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        gap-x-5
                '>
                <div className='
                            relative
                            h-48
                            w-48
                            rounded-full
                            overflow-hidden
                            min-w-0
                            flex-shrink-0
                    '>
                    <img
                        src={props.person.profilePath.endsWith("null") ? `${process.env.PUBLIC_URL}/posterNotFound.jpg` : props.person.profilePath}
                        alt="profile"
                        className='h-full w-full shadow-xl'
                        style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
                    />
                </div>

                <div className='
                            flex
                            flex-col
                            gap-y-2
                            mt-4
                            md:mt-0
                    '>
                    <div className='hidden md:block font-semibold text-sm text-white'>
                        ACTOR
                    </div>

                    <h1 className='
                                text-white
                                text-4xl
                                sm:text-5xl
                                lg:text-7xl
                                font-semibold
                                mb-2
                                mt-2
                                w-full
                        '>
                        {props.person.name}
                    </h1>
                    <div className='
                              text-white
                                text-xl
                                font-semibold
                                flex
                                items-center
                                relative
                        '>
                        <button
                            onClick={onClickBiography}
                            className='
                              text-white
                                !text-sm
                                font-semibold
                                flex
                                items-center
                                underline
                        '>
                            show biography
                        </button>
                    </div>

                </div>
            </div>

            {isOpenModal && <BiographyModal
                setIsOpenModal={setIsOpenModal}
                title=""
                description=""
                person={props.person}
            />
            }
        </div>
    )
}

export default HeaderContent