import React from 'react';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSelector = useSelector(state => state.user)

    console.log('sele', userSelector)
    

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // dispatch(removeUser());
            navigate('/');
          }).catch((error) => {
            
          });
    }


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <div className='w-1/6 relative px-8 py-2 '>
            <img src={LOGO} alt='logo'/>
        </div>
        
        <div className='flex mr-8 gap-4 relative'>
            {!userSelector ? <img src={USER_AVATAR} alt='usericon' className='w-12 h-12'/> : 
                <img src={userSelector.photoURL} alt='usericon' className='w-12 h-12'/>}
            {userSelector && 
                <p className='text-white font-semibold'>{userSelector.displayName}</p>}
            <button 
                className='bg-red-800 px-4 py-1 text-white rounded-md font-semibold h-1/2'
                onClick={handleSignOut} >Sign Out</button>
        </div>

    </div>
  )
}

export default Header