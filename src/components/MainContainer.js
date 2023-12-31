import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((state) => state.movies.nowPlayingMovies);
    if(!movies) return;

    const movie = movies[1];
    const {id, title, overview } = movie;
    
  
    return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;