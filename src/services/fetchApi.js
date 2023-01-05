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


//todo: refactor
/*

export const Api = async (type = null, query = null, page = 1) => {

  if (type === 'query') {
    const get = `${BACKEND}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  }

  if (type === 'popular') {
    const get = `${BACKEND}trending/movie/day?api_key=${API_KEY}`;
  }

  if (type === 'details') {
    const get = `${BACKEND}movie/${movieId}?api_key=${API_KEY}`;
  }

  if (type === 'reviews') {
    const get = `${BACKEND}movie/${movieId}/reviews?api_key=${API_KEY}`;
  }
  if (type === 'cast') {
    const get = `${BACKEND}movie/${movieId}/credits?api_key=${API_KEY}`;
  }




  try {
    console.log(query);
    const response = await axios.get(get);
    console.log(response);
    return await response.data;

  } catch (error) {
    console.log(error.message);
    return error.message;
  }

};
*/




