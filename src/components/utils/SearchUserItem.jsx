import React from 'react';
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";
import { addFollower, removeFollower } from '../../api/Followers';
import toast from 'react-hot-toast';
import { getUser } from '../../auth/AuthContext';
import { getUserById } from '../../api/Account';
import { useNavigate } from 'react-router-dom';


function UserProfile(props) {

    const navigate = useNavigate();

    const handleAddFollower = async (event) => {
        event.stopPropagation();

        try{
            const message = await addFollower(props.user.id);

            if(message == "Failed to follow."){
                toast.error(message);
            }
            else if (message == "Start following." || message == "You allready follow this user."){
                toast.success(message);
                props.onPlaylistCreated();
            }
        }
        catch (error) {
            toast.error("Something went wrong");
        }
    }

    const handleRemoveFollower = async (event) => {
        event.stopPropagation();

        try{
            const message = await removeFollower(props.user.id);
            console.log(message);

            if (message == "Follower successfully removed." || message == "You allready follow this user."){
                toast.success(message);
                props.onPlaylistCreated();
            }
            else{
                throw Error;
            }
        }
        catch (error) {
            toast.error("Something went wrong");
        }
    }

    const handleClickUser = async () => {
        const userDetails = await getUserById(props.user.id);
        const user = getUser();

        props.setIsOpenModal(false);

        if(user.id != props.user.id){
            navigate(`/profile/${userDetails.username}`, { state: { user: userDetails} });
        }
        else{
            navigate(`/account/${userDetails.username}`, { state: { user: userDetails} });
        }
    }

  return (
    <div 
        className="flex items-center mx-2 p-2 rounded-2xl hover:bg-black/20"
        onClick={handleClickUser}
    >
        {props.user.profileUrl == "" && 
            <img
                src={`${process.env.PUBLIC_URL}/account.svg`}
                alt="profile photo"
                className="w-16 h-16 rounded-full mr-4"
                style={{ objectFit: 'cover' }}
        />}
         {props.user.profileUrl != "" && 
            <img
                src={`${props.user.profileUrl}`}
                alt="profile photo"
                className="w-16 h-16 rounded-full mr-4"
                style={{ objectFit: 'cover' }}
     />}

        <div className='flex items-center justify-between w-full'>
            <div>
            <p className="text-white text-xl ml-1 mt-3 truncate w-44">@{props.user.username}</p>
            <p className="text-neutral-400 text-md ml-1 mt-[-20px] truncate w-44">{props.user.name}</p>
            </div>
             <div className='flex items-center justify-center'>
                <button 
                    className='mr-3'
                    onClick={handleAddFollower}
                >
                    <AiOutlineUserAdd 
                        size={32}
                        className='text-neutral-400 hover:text-green-500'
                    />
                </button>
                <button onClick={handleRemoveFollower}>
                    <AiOutlineUserDelete 
                        size={32}
                        className='text-neutral-400 hover:text-rose-600'
                    />
                </button>
             </div>
        </div>
    </div>

  );
}

export default UserProfile;