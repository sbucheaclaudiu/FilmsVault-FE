import axios from "axios";
import { authHeader } from "../auth/AuthContext";

const baseURL = "http://localhost:8080/moviesVault/details/";

const getAllDetails = async (id, type) => {
    try {
        const response = await axios.get(`${baseURL}${type}?id=` + id, 
              { 
                 headers: authHeader(),
              });
     
        return response.data;
      } catch (error) {
        console.log(error);
        throw Error;
      }
}

export const getDetails = async (type, id) => {
  try {
    if(type === "movie"){
        const response = await getAllDetails(id, "getMovieDetails");
        return response;
    }
    return null;
  } catch (error) {
    return null;
  }
}

const getAllCast = async (id, type) => {
    try {
        const response = await axios.get(`${baseURL}${type}?id=` + id, 
              { 
                 headers: authHeader(),
              });
     
        return response.data;
      } catch (error) {
        console.log(error);
        throw Error;
      }
}

export const getCast = async (type, id) => {
    try {
      if(type === "movie"){
          const response = await getAllCast(id, "getMovieCast");
          return response;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  const getAllVideo = async (id, type) => {
    try {
        const response = await axios.get(`${baseURL}${type}?id=` + id, 
              { 
                 headers: authHeader(),
              });
     
        return response.data;
      } catch (error) {
        console.log(error);
        throw Error;
      }
}

  export const getVideo = async (type, id) => {
    try {
      if(type === "movie"){
          const response = await getAllVideo(id, "getMovieVideos");
          return response;
      }
      return null;
    } catch (error) {
      return null;
    }
  }