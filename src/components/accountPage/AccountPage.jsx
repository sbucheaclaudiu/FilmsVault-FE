import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../utils/Header'
import HeaderContent from './HeaderContent'
import { getUser } from '../../auth/AuthContext';
import HeaderScroll from '../utils/HeaderScroll';
import PlaylistList from '../utils/PlaylistList';
import { getPlaylists } from '../../api/Playlist';
import SlideScroll from '../showFormat/SlideScroll';
import EditButton from './EditButton';
import { useNavigate } from 'react-router-dom';
import DeleteAccountModal from '../modals/DeleteAccountModal';
import ModifAccountModal from '../modals/ModifAccountModal';

function AccountPage() {
  const navigate = useNavigate();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const onEditAccount = () => {
        setIsOpenModal(true);
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    const onDeleteAccount = () => {
        setIsOpenDeleteModal(true);
    }

    const goToLoginPage = () => {
        navigate(`/login`);
    }

  const location = useLocation();
  const { user } = location.state || {};

  console.log(user);

  const [playlists, setPlaylists] = useState([]);

  const getPlaylistsRequest = async () => {
    const playlistsList = await getPlaylists();
    setPlaylists(playlistsList);
  }

  useEffect(() => {
    getPlaylistsRequest();
  }, [])

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
                            text={"Edit account"}
                            onClick={onEditAccount}
                            type="submit"
                />
                <EditButton 
                            text={"Delete account"}
                            onClick={onDeleteAccount}
                            type="submit"
                />
                {isOpenModal && <ModifAccountModal 
                            setIsOpenModal={setIsOpenModal}
                            title="Update Your Account"
                            description=""
                            email={user.email}
                            name={user.name}
                            username={user.username}
                            photo={user.profileUrl}
                            id={user.id}
                            //description="Save and organize genre-specific movies effortlessly in your custom playlist."
                        />
                }   
                {isOpenDeleteModal && <DeleteAccountModal 
                            setIsOpenModal={setIsOpenDeleteModal}
                            title="Are you sure you want to delete this account ?"
                            description=""
                            userId={user.id}
                            goToLoginPage={goToLoginPage}
                        />
                }
            </div>

            <div className='pl-4 pr-5 mb-6'>
                <HeaderScroll headerName="Playlists created"/>

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

export default AccountPage