import React from 'react'
import RowContentt from './RowContentt'
import { IoMdStarOutline } from "react-icons/io";
import "../styleComponents.css"

function TableContent(props) {
  console.log(props);
  return (
    <div className="flex flex-col bg-transparent w-full max-w-full mt-6 overflow-scroll">
          <table className="min-w-full table-auto bg-transparent w-full mb-4">
            <thead>
              <tr>
                <th className="title-table text-xl">#</th>
                <th className="title-table pl-2">Name</th>
                <th className="title-table">Year</th>
                <th className="title-table">Note</th>
                <th className="title-table">Rating</th>
                <th className="title-table"></th>
              </tr>
            </thead>
            <tbody className="bg-transparent">
              <tr className='h-6'>
                <td colSpan={5}></td>
              </tr>
                {props.moviesList.map((movie, index) => {
                   return (<RowContentt movie={movie} index={index} />)
                  })}
            </tbody>
          </table>
        </div>
  )
}

export default TableContent