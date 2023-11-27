import React from 'react';
import { LOGO } from '../utils/constants';

const Header = () => {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <div className='w-1/6 relative px-8 py-2 '>
            <img src={LOGO} alt='logo'/>
        </div>
        <div>
            <button className='relative bg-red-800 px-4 py-2 text-white rounded-md mr-8 font-semibold'>Sign In</button>
        </div>

    </div>
  )
}

export default Header