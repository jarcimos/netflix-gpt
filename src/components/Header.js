import React, { useEffect } from 'react';
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { clearMovieNames, clearMovieResults, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const showGptSearch = useSelector(state => state.gpt.showGptSearch);
     


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL } = user;
              dispatch(addUser({uid: uid, email:email, displayName: displayName, photoURL: photoURL}));
              navigate('/browse')
            } else {
              dispatch(removeUser());
              navigate('/')
            }
          });

          return () => unsubscribe();
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => { }).catch((error) => { });
    }

    const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView());
      dispatch(clearMovieNames());
      dispatch(clearMovieResults());
    }


    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value))
    }



  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img src={LOGO} alt='logo' className='w-44 mx-auto md:mx-0'/>
        {user && (
          <div className='flex p-2 justify-between'>
          {showGptSearch && <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
          </select>}
          
          <button
              className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
              
              <img src={user.photoURL} alt='usericon' className='hidden md:block w-12 h-12 mr-5'/>
              
              {/* <p className='text-white font-semibold'>{user.displayName}</p> */}
              <button 
                  className="font-bold text-white"
                  onClick={handleSignOut} >Sign Out</button>
          </div>
        )}
        
        

    </div>
  )
}

export default Header