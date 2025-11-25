import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const { user } = useContext(UserContext);
  
    
    if (!user) {
        return (
        <div>
            <h2>Please log in to view your profile.</h2>
        </div>
        );
    }
    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {user.username}</p>
        </div>
    )
  
}

export default Profile