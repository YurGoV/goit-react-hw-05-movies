import axios from 'axios';

const API_KEY = 'fe13ab826a741d40ca015441d0a0f529';
const BACKEND = 'https://api.themoviedb.org/3/';


export const Api = {
  async findPopular() {
    try {
      const response = await axios.get(`${BACKEND}trending/movie/day?api_key=${API_KEY}`);
      const answer = await response.data.results;
      return answer;
    } catch (error) {
      // console.log(error.message);
      return error;
    }
  },

  async getMovieDetails(movieId) {
    try {
      const response = await axios.get(`${BACKEND}movie/${movieId}?api_key=${API_KEY}`);
      const answer = await response.data;

      return answer;
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  async getMovieReviews(movieId) {
    try {
      const response = await axios.get(`${BACKEND}movie/${movieId}/reviews?api_key=${API_KEY}`);
      const answer = await response.data.results;

      return answer;
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  async getMovieCast(movieId) {
    try {
      const response = await axios.get(`${BACKEND}movie/${movieId}/credits?api_key=${API_KEY}`);
      const answer = await response.data.cast;
      return answer;
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  async findOnQuery(query, page = 1) {
    try {
      // console.log(query);
      const response = await axios.get(`${BACKEND}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
      // console.log(response);
      const answer = await response.data.results;

      return answer;
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

};




