import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector(state => state.gpt);
  
  if (movieNames === null) return; 


  console.log('rrr', movieNames, movieResults);

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-70'>
      {movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={movieResults[index]}/>)}
    </div>
  )
}

export default GptMovieSuggestions