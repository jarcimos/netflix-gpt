import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import movieTrailers from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(state => state.movies.trailerVideo);
  movieTrailers(movieId);
  

  return (
    <div className='w-screen h-screen'>{
      <iframe 
      className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/ftUpFjGKuY0?si=wHbUNc6mgN7zcQS-" + trailerVideo?.key + "?&autoplay=1&mute=1"} 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
      </iframe>
      }
    </div>
  )
}

export default VideoBackground