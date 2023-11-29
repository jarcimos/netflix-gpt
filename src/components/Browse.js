import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMoviesApi from '../hooks/useNowPlayingMoviesApi';
import MainContainer from './MainContainer';

const Browse = () => {

useNowPlayingMoviesApi();

  return (
    
    <div>
        <Header />
        <MainContainer />
    </div>
  )
}

export default Browse