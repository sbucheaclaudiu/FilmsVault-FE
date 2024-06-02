import axios from "axios";
import { authHeader } from "../auth/AuthContext";
import { baseURL } from "./utils";

const baseUrl = `${baseURL}/details/`;

const getAllDetails = async (id, type) => {
  try {
      const response = await axios.get(`${baseUrl}${type}?id=` + id, 
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
      const response = await axios.get(`${baseUrl}getCast?id=` + id + "&type=" + type, 
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
      const response = await axios.get(`${baseUrl}getVideos?id=` + id + `&type=` + type, 
              { 
                 headers: authHeader(),
              });
     
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export const getRecommended = async (title) => {
    try {
      const response = await axios.get(`${baseUrl}getRecommendations?title=` + title, 
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
      const response = await axios.get(`${baseUrl}getMovieCredits?id=` + id, 
              { 
                 headers: authHeader(),
              });
     
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }