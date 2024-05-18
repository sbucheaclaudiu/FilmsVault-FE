import React from 'react'
import RowContent from './RowContent'
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineInfo } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import "../styleComponents.css";

function TableContent(props) {

  console.log(props.moviesList);
  
  return (
    <div className="flex flex-col bg-transparent w-full max-w-full mt-6 pb-10 overflow-scroll">
          <table className="min-w-full table-auto bg-transparent w-full mb-4">
            <thead>
              <tr>
                <th className="title-table text-xl">#</th>
                <th className="title-table">Name</th>
                <th className="title-table">
                  <MdOutlineInfo size={20}
                    className='ml-[-15px]'/>
                </th>
                <th className="title-table">
                  <FaStar size={20} className='ml-[-5px]'/>
                </th>
                <th className="title-table">
                  <BsCalendar2DateFill size={18} />
                </th>
                <th className="title-table"></th>
              </tr>
            </thead>
            <tbody className="bg-transparent">
              <tr className='h-6'>
                <td colSpan={5}></td>
              </tr>
                {props.moviesList.map((movie, index) => {
                   return (<RowContent movie={movie} index={index} playlist={props.playlist} fetchMovies={props.fetchMovies}/>)
                  })}
            </tbody>
           </table>

            {props.moviesList.length == 0 &&
                  <div className='text-xl text-white font-bold pl-6 pb-10'>
                    Movies not found in this playlist.
                  </div>
            }

            {props.playlist.privatePlaylist && 
             <div className='text-md mt-8 ml-2 mb-4 flex items-center font-semibold'>
              <FaLock size={20} className='mr-4'/>
              <div className='text-md font-semibold'>{props.playlist.dateCreated}</div>
             </div>
            }

            {!props.playlist.privatePlaylist && 
             <div className='text-md mt-8 ml-2 mb-4 flex items-center font-semibold'>
              <FaUnlock size={20} className='mr-4'/>
              <div className='text-md font-semibold'>{props.playlist.dateCreated}</div>
             </div>
            }
            
        </div>
  )
}

export default TableContent