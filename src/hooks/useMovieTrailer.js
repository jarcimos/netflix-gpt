import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    
    // const movieKey = selector;
    

    
    const movieTrailers = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"
         + movieId + 
         "/videos?language=en-US", API_OPTIONS)
        const json = await data.json();

        const filterTrailers = json.results.filter(item => item.type === "Trailer");
        const trailer = filterTrailers[0];
        dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(() => {
        movieTrailers();
    }, []);

    
}

export default useMovieTrailer;