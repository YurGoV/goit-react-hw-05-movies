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
  }
};



