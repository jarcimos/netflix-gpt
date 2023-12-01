import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMoviesApi from '../hooks/useNowPlayingMoviesApi';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMoviesApi from '../hooks/usePopularMoviesApi';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
    const gptToggle = useSelector(state => state.gpt.showGptSearch);

    useNowPlayingMoviesApi();
    usePopularMoviesApi();

  return (
    
    <div>
        <Header />
        { gptToggle ? (
            <GptSearch />
            ) : (
            <>
                <MainContainer />
                <SecondaryContainer />
            </>
            )
        }
        
    </div>
  );
};

export default Browse