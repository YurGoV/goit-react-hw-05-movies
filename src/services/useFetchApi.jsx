import {useEffect, useState} from "react";
import axios from "axios";

const API_KEY = 'fe13ab826a741d40ca015441d0a0f529';
const BACKEND = 'https://api.themoviedb.org/3/';


const fetchPopular = (setResult, query = null, page = 1, type = 'popular') => {
  try {
    axios(`${BACKEND}trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        return setResult(response.data.results)
      });
  } catch (error) {
    return error;
  }
};

const fetchMovieDetails = (setResult, movieId) => {
  try {
    axios(`${BACKEND}movie/${movieId}?api_key=${API_KEY}`)
            .then((response) => {
              return setResult(response.data)
            });
  } catch (error) {
    // console.log(error.message);
    return error;
  }
};

const fetchMovieCast = (setResult, movieId) => {
  try {
    axios(`${BACKEND}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((response) => {
        return setResult(response.data.cast)
      });
  } catch (error) {
    // console.log(error.message);
    return error;
  }
};

const fetchMovieReviews = (setResult, movieId) => {
  try {
    axios(`${BACKEND}movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then((response) => {
        return setResult(response.data.results)
      });
  } catch (error) {
    // console.log(error.message);
    return error;
  }
};

const fetchOnQuery = (setResult, query, page = 1) => {
  console.log('fetchFuncStarted');
  const searchString = query.trim()
  try {
    if (!searchString || searchString === '') {
      return []
    }
    axios(`${BACKEND}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
      .then((response) => {
        return setResult(response.data.results)
      });
  } catch (error) {
    return error;
  }
};

export const useFetchApi = (query = '', type = 'popular', page = 1) => {

  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(0);
  const [movieReviews, setMovieReviews] = useState('');
  const [movieCast, setMovieCast] = useState('');

  useEffect(() => {
    try {
      if (type === 'popular') {
        fetchPopular(setMovies)
      }
      if (type === 'details' && query) {//todo: if (query.movieId)
        console.log('ifDetails, ', query);
        fetchMovieDetails(setMovieDetails, query)
      }
      if (type === 'reviews' && query) {//todo: if (query.movieId)
        console.log('ifReviews, ', query);
        fetchMovieReviews(setMovieReviews, query)
      }
      if (type === 'cast' && query) {//todo: if (query.movieId)
        console.log('ifCast, ', query);
        fetchMovieCast(setMovieCast, query);
      }
      if (type === 'query' && query === '') {
        console.log('emptyQ');
        return
      }
      if (type === 'query') {//todo: if (query.movieId)

        fetchOnQuery(setMovies, query)
      }


    } catch (error) {
      // console.log(error.message);
      return error;
    }

  }, [query, type]);

  return {movies, movieDetails, movieReviews, movieCast}
};


