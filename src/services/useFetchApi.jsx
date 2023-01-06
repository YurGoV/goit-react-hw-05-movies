import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const API_KEY = 'fe13ab826a741d40ca015441d0a0f529';
const BACKEND = 'https://api.themoviedb.org/3/';

export const useFetchApi = () => {

  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(0)

  // console.log('useHook');

  const fetchPopular =  useCallback(  async (query = null, page = 1, type = 'popular') => {
      try {
        if (type === 'popular' ) {
          // console.log(type);
          const response = await axios.get(`${BACKEND}trending/movie/day?api_key=${API_KEY}`);
          const answer = await response.data.results;
          setMovies(answer);
          // return answer;
        }
        if (type === 'details' && query ) {//todo: if (query.movieId)
          // console.log(query);
          const response = await axios.get(`${BACKEND}movie/${query.movieId}?api_key=${API_KEY}`);
          const answer = await response.data;
          setMovieDetails(answer);
        }
        } catch (error) {
        // console.log(error.message);
        return error;
      }
    }, []);


  useEffect(() => {
      fetchPopular()
  }, [fetchPopular]);

  return {movies, movieDetails, fetchPopular}
};
