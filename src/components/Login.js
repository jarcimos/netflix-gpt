import React, { useState, useRef } from 'react';
import Header from './Header';
import { BG_URL } from '../utils/constants';
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const userName = useSelector(state => state);
    const dispatch = useDispatch();
    
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
 
    const handleButtonClick = () => {
        const message = validateData(email.current.value, password.current.value);
        setErrorMessage(message)
        
       if(message) return;

       if(!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: "https://lh3.googleusercontent.com/a/ACg8ocII6r_QdbiKchS2siHOFMh-WX1NelZ0fOj1V91EjR-PteA=s192-c-rg-br100"
                      }).then(() => {
                        const {uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({uid: uid, email:email, displayName: displayName, photoURL: photoURL}));
                        navigate('/browse');
                      }).catch((error) => {
                        setErrorMessage(error.message)
                      });
                    
                    console.log('logged in', user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                }
            );
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                }
            );
        }

    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div className='bg-pink'>
        <Header />
       <div className='absolute'>
            <img src={BG_URL} alt='background image'/>
       </div>
       <form 
        onSubmit={(e) => e.preventDefault() }
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
                {isSignInForm ? 'Sign In' : 'Sign Up'}
            </h1>
            {
                !isSignInForm && <input ref={name} type='text' placeholder='Full Name' className="p-4 my-4 w-full bg-gray-700" /> 
                
            }
            <input 
                ref={email}
                type='text' 
                placeholder='Email Address' 
                className="p-4 my-4 w-full bg-gray-700"
                 />
            <input 
                ref={password}
                type='password' 
                placeholder='Password' 
                className="p-4 my-4 w-full bg-gray-700" />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                {isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In'}
            </p>
       </form>
    </div>
  )
}

export default Login