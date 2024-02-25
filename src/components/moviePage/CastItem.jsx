import React from 'react'
import { getDetails } from '../../api/GetDetails';
import { useNavigate } from 'react-router-dom';

function CastItem(props) {

  const navigate = useNavigate();

  const handleClick = async () => {
    const details = await getDetails("person", props.person.personId);

    navigate(`/person/${props.person.name.replace(/\s/g, "")}`, { state: { person: details } });
  }

  return (
    <div 
        className=' 
            cursor-pointer 
            !pr-0
            !pl-0
            !w-52
            ml-10
    '>
            <div 
                onClick={handleClick}
                 key={props.person.personId}
                 className='
                 relative
                 image-container
                 justify-content-start
                 d-flex
                 overflow-hidden 
                 gap-x-4 
                 cursor-pointer 
                 !h-52
                 !pr-0
                 !pl-0
                 rounded-full
                 '>
                    <img src={props.person.profilePath.endsWith("null") ? `${process.env.PUBLIC_URL}/posterNotFound.jpg` : props.person.profilePath} 
                            alt="profile"
                            className='h-full w-full rounded-full'
                            style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
                            >
                    </img>
            </div>
            <div className="text-white font-semibold text-md my-2 text-center">
               {props.person.name}
            </div>
            <div className="text-white my-2 text-sm text-center">
               ({props.person.character})
            </div>
    </div>
  )
}

export default CastItem