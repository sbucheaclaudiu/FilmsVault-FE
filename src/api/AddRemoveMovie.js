import axios from "axios";
import { authHeader } from "../auth/AuthContext";
import { baseURL } from "./utils";

const baseUrl = `${baseURL}/movie`;

export const addMovieToPlaylist = async (movie, userRating, userDescription, playlistId) => {
    try {
        const requestBody = {
            movieId: movie.movieId,
            movieName: movie.movieName,
            posterPath: movie.posterPath,
            genres: movie.genres,
            userNote: userDescription,
            releaseYear: movie.type === 'movie' ? movie.releaseDate.slice(0,4): movie.lastAirDate.slice(0,4),
            userRating: userRating,
            movieRating: movie.rating,
            playlistId: playlistId,
            type: movie.type
        }

        const response = await axios.post(`${baseUrl}/addMovie`, requestBody,
              { 
                 headers: authHeader(),
              });
     
        return response.data;
      } 
      catch (error) {
        console.log(error);
        throw Error;
      }
  }

  export const removeMovieFromPlaylist = async (movieId, playlistId) => {
    try {
        const requestBody = {
            movieId: movieId,
            playlistId: playlistId
        }

        const response = await axios.post(`${baseUrl}/removeMovie`, requestBody,
              { 
                 headers: authHeader(),
              });
     
        return response.data;

      } 
      catch (error) {
        console.log(error);
        throw Error;
      }
  }