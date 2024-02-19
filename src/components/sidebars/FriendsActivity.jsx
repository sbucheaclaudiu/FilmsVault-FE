import React from 'react'
import toast from 'react-hot-toast';
import { IoIosClose } from "react-icons/io";


function FriendsActivity() {

  const handleX = () => {
  }

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
            <button onClick={handleX}>
                <IoIosClose className='text-white' size={30}/>
            </button>
        </div>
    </div>
  )
}

export default FriendsActivity