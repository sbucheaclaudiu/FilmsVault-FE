import React, { useEffect, useState, useRef } from 'react'
import Modal from './Modal';
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";


function BiographyModal(props) {

  console.log(props);

  return (
    <Modal
        {...props} 
        setIsOpenModal={props.setIsOpenModal}
    >
        <div>
            <div 
                 className='relative flex items-center justify-center mt-[-40px] mb-4'>
                    <img src={props.person.profilePath.endsWith("null") ? `${process.env.PUBLIC_URL}/posterNotFound.jpg` : props.person.profilePath} 
                            alt="profile"
                            className='rounded-full h-20 w-20 shadow-2xl'
                            style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
                            >
                    </img>
                    <div className="text-white font-semibold text-xl ml-6">
                            {props.person.name}
                    </div>

            </div>

            <div className='text-white flex flex-col mb-4 items-center'>
                <div className='font-semibold flex text-xt text-center'>
                    <MdDateRange className='mr-2' size={25}/>
                    Birthday: &nbsp;&nbsp;
                </div>
                {props.person.birthday}
            </div>

            <div className='text-white flex flex-col mb-4 items-center'>
                <div className='font-semibold flex text-xl text-center'>
                    <FaLocationDot className='mr-2' size={25}/>
                    Place of birth: &nbsp;&nbsp;
                </div>
                {props.person.placeOfBirth}
            </div>

            <div className='flex flex-col text-white items-center'>
                <div className='flex font-semibold pb-2 text-xl'>
                    <MdOutlineInfo className='mr-2 mt-[1px]' size={25}/>
                    Biography:
                </div>
                <div className='overflow-y-auto max-h-[270px] text-center'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.person.biography}
                </div>
            </div>

        </div>
    </Modal>
  )
}

export default BiographyModal