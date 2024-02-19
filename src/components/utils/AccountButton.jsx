import React, { useState, useEffect, useRef } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { deleteUser, getUser } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function AccountButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuContainerRef = useRef(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    deleteUser();
    navigate("/login");
  };

  const handleProfile = () => {
    const user = getUser();
    navigate(`/profile/${user.username}`)
  };

  const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={menuContainerRef} className='relative'>
        <button
            onClick={toggleMenu}
            className='
                        rounded-full
                        bg-black
                        flex
                        items-center
                        justify-center
                        hover:opacity-75
                        transition
                        size-10
                        '
        >
            <MdAccountCircle size={35}
                className='text-white'
            />
        </button>
        {isMenuOpen && (
            <div className='absolute
                            top-full 
                            w-48 
                            right-0 
                            mt-2
                          bg-neutral-800
                            rounded-md 
                            shadow-md
                            p-[5px]

            '>
              <button onClick={handleProfile} 
                      className='
                      text-md
                      block 
                      w-full 
                      py-2
                      px-[12px]
                    text-white
                      text-left
                    hover:bg-neutral-600
                      hover:rounded-sm
                      border-b-[1px]
                    border-neutral-600
              '>
                    Profile
              </button>
              <button onClick={handleLogout}
                      className='
                      flex
                      items-center
                      text-md
                      w-full
                      text-left
                      py-2
                      px-[12px]
                    text-white
                    hover:bg-neutral-600
                      hover:rounded-sm
                '>
                    <span className='flex-1'>Log out</span>
                    <IoMdLogOut size={20}/>
              </button>
            </div>
          )}
    </div>
    )
}

export default AccountButton