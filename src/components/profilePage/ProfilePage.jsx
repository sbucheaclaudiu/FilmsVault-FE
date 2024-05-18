import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../utils/Header'
import HeaderContent from './HeaderContent'
import { getUser } from '../../auth/AuthContext';
import HeaderScroll from '../utils/HeaderScroll';
import PlaylistList from '../utils/PlaylistList';
import { getPlaylistByUser, getPlaylists } from '../../api/Playlist';
import SlideScroll from '../showFormat/SlideScroll';
import { useNavigate } from 'react-router-dom';
import EditButton from '../accountPage/EditButton';
import { addFollower, removeFollower } from '../../api/Followers';
import toast from 'react-hot-toast';

function ProfilePage() {
  const navigate = useNavigate();

  const location = useLocation();
  const { user } = location.state || {};

  console.log(user);

  const [playlists, setPlaylists] = useState([]);

  const getPlaylistsRequest = async () => {
    const playlistsList = await getPlaylistByUser(user.id);
    setPlaylists(playlistsList);
  }

  useEffect(() => {
    getPlaylistsRequest();
  }, [location])

  const handleAddFollow = async () => {
    try{
      const message = await addFollower(user.id);

      if(message == "Failed to follow."){
          toast.error(message);
      }
      else if (message == "Start following." || message == "You allready follow this user."){
          toast.success(message);;
      }
  }
  catch (error) {
      toast.error("Something went wrong");
  }
  }

  const handleDeleteFollower = async () => {
    try{
      const message = await removeFollower(user.id);
      console.log(message);

      if (message == "Follower successfully removed." || message == "You allready follow this user."){
          toast.success(message);;
      }
      else{
          throw Error;
      }
  }
  catch (error) {
      toast.error("Something went wrong");
  }
  }

  return (
    <div className='bg-black h-full flex-1 overflow-y-auto py-2'>
      <div className='
             bg-neutral-900
             rounded-lg
             h-full
             w-full
             overflow-hidde
             overflow-y-auto
             '>
            <Header className="bg-rose-600 bg-left" backdropPath={require("../../assets/loginImage.jpg")}>
                  <HeaderContent user={user}/>
            </Header>

            <div className='pl-8 pr-5 mb-5 mt-[-60px] !z-30 justify-start flex gap-x-4'>
                <EditButton 
                            text={"Add follower"}
                            onClick={handleAddFollow}
                            type="submit"
                />
                <EditButton 
                            text={"Delete follower"}
                            onClick={handleDeleteFollower}
                            type="submit"
                />
            </div>

            <div className='pl-4 pr-5 mb-6'>
                <HeaderScroll headerName="Public Playlists"/>

                <SlideScroll
                  length={playlists.length}
                  message="Oops! Something went wrong with the API call. Login again! (Auth Expired)"
                >
                  <PlaylistList playlists={playlists} />
                </SlideScroll>
            </div>
    
      </div>
    </div>
  )
}

export default ProfilePage