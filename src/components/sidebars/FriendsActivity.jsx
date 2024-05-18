import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { IoIosClose } from "react-icons/io";
import { SlUserFollow } from "react-icons/sl";
import { RiUserAddLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import CreatePlaylistModal from '../modals/CreatePlaylistModal';
import AddFollowingModal from '../modals/AddFollowingModal';


function FriendsActivity(props) {

  return (
    <div className='px-4 py-4 flex gap-x-2 relative items-center'>
        <h1 className='
            text-white
            text-xl
            font-semibold
        '>
            Friends Activity
        </h1>
        <div className='
                    absolute
                    end-0
                    pr-4
                    '>
            <button onClick={props.onClickAdd}>
                <RiUserAddLine className='text-neutral-400 hover:text-white' size={27}/>
            </button>

        </div>
    </div>
  )
}

export default FriendsActivity