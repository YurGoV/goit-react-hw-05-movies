import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const API_KEY = 'fe13ab826a741d40ca015441d0a0f529';
const BACKEND = 'https://api.themoviedb.org/3/';

export const useFetchApi = (query = null, page = 1) => {

  const [movies, setMovies] = useState([])
  // console.log('useHook');

  const fetchPopular =  useCallback(  async () => {
      try {
        const response = await axios.get(`${BACKEND}trending/movie/day?api_key=${API_KEY}`);
        const answer = await response.data.results;
        setMovies(answer);
        return answer;
      } catch (error) {
        // console.log(error.message);
        return error;
      }
    }, []);
    // await fetch();


  useEffect(() => {
    // console.log('useHook2');
    if (!query && page) {
      // console.log('useHook3');
      fetchPopular()
    }

  }, [fetchPopular, page, query]);

  return {movies, fetchPopular}

};
