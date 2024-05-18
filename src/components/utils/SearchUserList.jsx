import React from 'react'
import "../styleComponents.css"
import SearchUserItem from './SearchUserItem'

function SearchUserList(props) {

  return (
    <>
        {props.users.map((user) => (
            <SearchUserItem 
                key={user.id}
                user={user}
                setIsOpenModal={props.setIsOpenModal}
                onPlaylistCreated={props.onPlaylistCreated}
            />
        ))}
    </>
  )
}

export default SearchUserList;