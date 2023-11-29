import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMoviesApi from '../hooks/useNowPlayingMoviesApi';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMoviesApi from '../hooks/usePopularMoviesApi';

const Browse = () => {

useNowPlayingMoviesApi();
usePopularMoviesApi();

  return (
    
    <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
    </div>
  )
}

export default Browse