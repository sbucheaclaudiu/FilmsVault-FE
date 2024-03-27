import React from 'react'
import MovieList from '../utils/MovieList';
import GridScroll from '../showFormat/GridScroll';
import HeaderScroll from '../utils/HeaderScroll';

function PersonInfo(props) {

    return (
        <div className='mt-[-15px] z-20 relative'>

            <div className='pl-4 mb-[-25px] mt-[-30px]'>
            <HeaderScroll headerName="KNOW FOR" length={props.movieCredits.length}/>
            </div>

            <GridScroll 
                    length={props.movieCredits.length}
                    message="No credits found for this acctor."
            >
                <MovieList movies={props.movieCredits} />
            </GridScroll>

        </div>
    )
}

export default PersonInfo