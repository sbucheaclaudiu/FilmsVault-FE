import React, { useState, useEffect } from 'react'
import HeaderPlaylist from './HeaderPlaylist'
import { getUser } from '../../auth/AuthContext';

function HeaderContent() {
  const [textHeader, setTextHeader] = useState('');

  useEffect(() => {
    const d = new Date();
    const user = getUser();

    console.log(user);
    if(6 < d.getHours() && d.getHours() < 11){
        console.log(d.getHours());
        setTextHeader("Good morning, " + user.name + "!");
    }
    else if(d.getHours() < 20){
        setTextHeader("Good evening, " + user.name + "!");
    }
    else{
        setTextHeader("Good night, " + user.name + "!");
    }
  }, []);


  return (
    <div className='mt-10 mb-[-50px]'>
                <h1 className='
                    text-white
                    text-3xl
                    font-semibold
                '>
                    {textHeader}
                </h1>
                <div className='
                     grid
                     grid-cols-2
                     sm:grid-cols-2
                     xl:grid-cols-3
                     2xl:grid-cols-4
                     gap-y-4
                     mt-4
                     gap-x-4
                '>
                    {/* <HeaderPlaylist image = {require("../../assets/watchlist.jpg")}
                              name="Watchlist"
                              href="watchlist"
                    />
                    <HeaderPlaylist image = {require("../../assets/vault.jpg")}
                              name="Watched"
                              href="watched"
                    /> */}
                </div>
            </div>
  )
}

export default HeaderContent