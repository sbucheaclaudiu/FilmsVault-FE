import React from 'react'

function HeaderScroll(props) {
    return (
        <div className='text-white text-3xl font-semibold pb-4 pl-3 pt-2'>
            <div className='flex items-center'>

                <div className='border-r-[10px] border-rose-600 rounded-md h-8 mr-3'></div>

                <div className='text-white text-3xl font-semibold'>
                    {props.headerName}
                </div>

                <div className='text-white text-xl font-semibold ml-4'>
                    {props.length ? `(${props.length})` : ""}
                </div>

            </div>
        </div>
    )
}

export default HeaderScroll