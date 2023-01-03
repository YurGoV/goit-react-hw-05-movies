import axios from 'axios';

const API_KEY = 'fe13ab826a741d40ca015441d0a0f529';
const BACKEND = 'https://api.themoviedb.org/3/';


export const Api = {
  async findPopular() {
    try {
      const response = await axios.get(`${BACKEND}trending/movie/day?api_key=${API_KEY}`);
      console.log(response);
      const answer = await response.data.results;

      return answer;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  },

  async getMovieDetails(movieId) {
    try {
      console.log(movieId);
      const response = await axios.get(`${BACKEND}movie/${movieId}?api_key=${API_KEY}`);
      console.log(response.data);
      const answer = await response.data;

      return answer;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  },

  async getMovieReviews(movieId) {
    try {
      console.log(movieId);
      const response = await axios.get(`${BACKEND}movie/${movieId}/reviews?api_key=${API_KEY}`);
      console.log(response.data.results);
      const answer = await response.data.results;

      return answer;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  },

  async getMovieCast(movieId) {
    try {
      console.log(movieId);
      const response = await axios.get(`${BACKEND}movie/${movieId}/credits?api_key=${API_KEY}`);
      console.log(response.data.cast);
      const answer = await response.data.cast;

      return answer;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  },

};



