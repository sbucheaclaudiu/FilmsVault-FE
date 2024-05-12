import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../utils/Header'
import HeaderContent from './HeaderContent'
import { getUser } from '../../auth/AuthContext';
import HeaderScroll from '../utils/HeaderScroll';

function AccountPage() {

  const location = useLocation();
  const { user } = location.state || {};

  console.log(user);

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
            
            <div className='pl-4'>
                <HeaderScroll headerName="Playlists created"/>    
            </div>
      </div>
    </div>
  )
}

export default AccountPage