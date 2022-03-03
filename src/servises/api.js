import axios from 'axios';
const API_KEY = '0754829cbe2d4a3d2043b315bf2671de'
const BASE_URl = 'https://api.themoviedb.org'

export const movieQuery = (paramsQuery, page) => fetch(`${BASE_URl}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${paramsQuery}&page=${page}&include_adult=false`);
   

export const homeQuery = page => axios.get(`${BASE_URl}/3/trending/movie/week?api_key=${API_KEY}&language=ru-US&page=${page}`);
   

export const movieDetailsQuery = matchId => fetch(`${BASE_URl}/3/movie/${matchId}?api_key=${API_KEY}&language=en-US`);
   

export const castQuery = matchId => fetch(`${BASE_URl}/3/movie/${matchId}/credits?api_key=${API_KEY}&language=en-US`);
  

export const reviewsQuery = matchId => axios.get(`${BASE_URl}/3/movie/${matchId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  

