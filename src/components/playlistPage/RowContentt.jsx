import React from 'react'
import "../styleComponents.css"


function RowContentt(props) {
    return (
        <tr key={props.index}>
            <td className="row-table-playlist w-10">{props.index + 1}</td>
            <td className="row-table-playlist flex ml-2">
                <img src={props.movie.posterPath} alt="Poster" className="w-14 h-14 rounded-md object-cover min-w-14 max-h-14" />
                <div className='ml-4 row-table-name items-center content-center text-white text-xl'> {props.movie.movieName} </div>
            </td>
            <td className="row-table-playlist ">{props.movie.releaseDate}</td>
            <td className="row-table-note">{props.movie.userNote}</td>
            <td className="row-table-playlist ">{props.movie.userRating}</td>
            <td className="row-table-playlist "></td>
        </tr>
    )
}

export default RowContentt