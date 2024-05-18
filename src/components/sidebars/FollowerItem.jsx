import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getMovieFromPlaylist, getPlaylistById } from '../../api/Playlist';
import { twMerge } from 'tailwind-merge'
import { TiPin } from "react-icons/ti";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineNextPlan } from "react-icons/md";
import { getUser } from '../../auth/AuthContext';
import { getUserById } from '../../api/Account';
import { getDetails } from '../../api/GetDetails';


function FollowerItem(props) {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const targetPath = `/profile/${props.user.username}`

  const goToProfile = async () => {
    const userDetails = await getUserById(props.user.id);
    const user = getUser();

    if(user.id != props.user.id){
        navigate(`/profile/${userDetails.username}`, { state: { user: userDetails} });
    }
    else{
        navigate(`/account/${userDetails.username}`, { state: { user: userDetails} });
    }
  }

  const goToMovieWatchlist = async () => {
    const details = await getDetails(props.user.lastWatchlistType, props.user.lastWatchlistTmdbId);
    
    if(props.user.lastWatchedType === "movie"){
      navigate(`/movie/${props.user.lastWatchlistName.replace(/\s/g, "")}`, { state: { movie: details } });
    }
    else if(props.user.lastWatchedType === "tv"){
      navigate(`/tvShow/${props.user.lastWatchlistName.replace(/\s/g, "")}`, { state: { movie: details } });
    }
    else if(props.user.lastWatchedType === "person"){
      navigate(`/person/${props.user.lastWatchlistName.replace(/\s/g, "")}`, { state: { person: details } });
    }
  }

  const goToMovieWatched = async () => {
    const details = await getDetails(props.user.lastWatchedType, props.user.lastWatchedTmdbId);
    
    if(props.user.lastWatchedType === "movie"){
      navigate(`/movie/${props.user.lastWatchedName.replace(/\s/g, "")}`, { state: { movie: details } });
    }
    else if(props.user.lastWatchedType === "tv"){
      navigate(`/tvShow/${props.user.lastWatchedName.replace(/\s/g, "")}`, { state: { movie: details } });
    }
    else if(props.user.lastWatchedType === "person"){
      navigate(`/person/${props.user.lastWatchedName.replace(/\s/g, "")}`, { state: { person: details } });
    }
  }


  console.log(props.user);
  

  return (
      <div
        className="flex items-center justify-center"
      >
        {props.user.profile_url == "" && 
            <img
                src={`${process.env.PUBLIC_URL}/account.svg`}
                alt="profile photo"
                className="w-16 h-16 rounded-full mr-4 hover:cursor-pointer hover:filter hover:brightness-50"
                style={{ objectFit: 'cover' }}
                onClick={goToProfile}
        />}
         {props.user.profile_url != "" && 
            <img
                src={`${props.user.profile_url}`}
                alt="profile photo"
                className="w-16 h-16 rounded-full mr-4 hover:cursor-pointer hover:filter hover:brightness-50"
                style={{ objectFit: 'cover' }}
                onClick={goToProfile}
        />}
        <div className='flex flex-col mb-[-10px]'>
            <p 
                className='text-neutral-400 font-bold mb-[-20px] text-md w-36 truncate hover:underline hover:text-neutral-300 hover:cursor-pointer'
                onClick={goToProfile}
            >
                {props.user.name}
            </p>
            <div className='flex mt-[20px] mb-[-35px] text-neutral-500'>
                <BiCameraMovie size={15} className='mr-1 mt-[2px]'/>
                <p 
                    className='font-bold text-sm w-36 truncate hover:underline hover:text-neutral-300 hover:cursor-pointer'
                    onClick={goToMovieWatched}
                >
                     {props.user.lastWatchedName} 
                </p>
            </div>
            <div className='flex mt-[20px] justify-center text-neutral-500'>
                <MdOutlineNextPlan size={15} className='mr-1 mt-[2px]'/>
                <p 
                    className='font-bold text-sm w-36 truncate hover:underline hover:text-neutral-300 hover:cursor-pointer'
                    onClick={goToMovieWatchlist}
                > 
                    {props.user.lastWatchlistName} 
                </p>
            </div>
        </div>
      </div>
  )
}

export default FollowerItem