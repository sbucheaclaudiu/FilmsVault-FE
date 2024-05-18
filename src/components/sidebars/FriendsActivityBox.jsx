import React, {useState, useEffect} from 'react'
import FriendsActivity from './FriendsActivity'
import FollowerItem from './FollowerItem'
import { getFollowersByUser } from '../../api/Followers';
import AddFollowingModal from '../modals/AddFollowingModal';

function FriendsActivityBox() {

  const [followers, setFollowers] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const onClickAdd = () => {
    setIsOpenModal(true);
  }

  const getFollowersRequest = async () => {
    const getFollowers = await getFollowersByUser();
    setFollowers(getFollowers);
  }

  const handleFollowingAdded = () => {
    getFollowersRequest();
  }

  useEffect(() => {
    getFollowersRequest();
  }, []);

  return (
    <div className="
      bg-neutral-900 
        rounded-lg 
        w-full
        overflow-y-auto
        h-full
        ">
          < FriendsActivity onClickAdd={onClickAdd}/>

          {followers && 
            <div className='
              flex
              flex-col
              gap-y-4
              mt-2
              px-3
               '>
               {followers.map((follower) => (
                <FollowerItem 
                  onClick={() => {}}
                  user={follower}
                />
               ))}
            </div>
          }

        {isOpenModal && <AddFollowingModal 
                            setIsOpenModal={setIsOpenModal}
                            title="Search and Follow Users"
                            description=""
                            onPlaylistCreated={handleFollowingAdded}
                            //description="Save and organize genre-specific movies effortlessly in your custom playlist."
                        />
        }
    </div>
  )
}

export default FriendsActivityBox