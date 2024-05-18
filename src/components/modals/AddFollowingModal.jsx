import React, { useEffect, useState, useRef } from 'react'
import Input from '../utils/Input';
import Button from '../utils/Button';
import toast from 'react-hot-toast';
import "../styleComponents.css"
import Textarea from '../utils/Textarea';
import { createPlaylist } from '../../api/Playlist';
import Modal from './Modal';
import SearchInput from '../utils/SearchInput';
import { searchUsersByUsername } from '../../api/Account';
import UserProfile from '../utils/SearchUserItem';
import SearchUserList from '../utils/SearchUserList';


function AddFollowingModal(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [users, setUsers] = useState([]);

  const getSearchUsers = async (searchValue) => {

    if(searchValue == "" || searchValue == undefined){
        setUsers([]);
    }
    else{
      const usersList = await searchUsersByUsername(searchValue);
      console.log(usersList);
      setUsers(usersList);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
        getSearchUsers(searchValue);
    }, 600);

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(timeout);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };

  }, [searchValue]);


    return (
        <Modal {...props} 
               setIsOpenModal={props.setIsOpenModal}
        >
            <div className=''>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex mt-[-20px] items-center justify-center w-full mb-4'>
                        <SearchInput 
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            placeholder='Search friends'
                            className='bg-black'
                        />
                    </div>

                    <div className='overflow-auto max-h-[300px]'>
                        {searchValue === "" ? (
                            <p className="text-white text-center">Please fill in the search field.</p>
                        ) : (
                        users.length === 0 ? (
                            <p className="text-white text-center">No users to display for the search term: "{searchValue}".</p>
                        ) : (
                            <SearchUserList 
                                users={users} 
                                setIsOpenModal={props.setIsOpenModal}
                                onPlaylistCreated={props.onPlaylistCreated}
                            />
                        )
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default AddFollowingModal;