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
    else if(type === "tv"){
        const response = await getAllDetails(id, "getTVDetails");
        return response;
    }
    else if(type === "person"){
        const response = await getAllDetails(id, "getPersonDetails");
        return response;
    }

    return null;
  } catch (error) {
    return null;
  }
}

export const getCast = async (type, id) => {
    try {
      const response = await axios.get(`${baseURL}getCast?id=` + id + "&type=" + type, 
              { 
                 headers: authHeader(),
              });
     
      return response.data;
    } catch (error) {
      return null;
    }
  }


  export const getVideos = async (type, id) => {
    try {
      const response = await axios.get(`${baseURL}getVideos?id=` + id + `&type=` + type, 
              { 
                 headers: authHeader(),
              });
     
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export const getMovieCredits = async (id) => {
    try {
      const response = await axios.get(`${baseURL}getMovieCredits?id=` + id, 
              { 
                 headers: authHeader(),
              });
     
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }