import axios from "axios";
import { authHeader } from "../auth/AuthContext";
import { baseURL, encodeSpaces } from "./utils";

const baseUrl = `${baseURL}/getRandomMovies/`;

export const getMovies = async (moviesType) => {
  try {
    const response = await axios.get(`${baseUrl}${moviesType}`, 
          { 
             headers: authHeader(),
          });
 
    return response.data;
  } catch (error) {
    //console.log(error);
    return [];
  }
}

export const searchMultiByName = async (name) => {
  try {
    name = name + "";
    name = encodeSpaces(name);
    const response = await axios.get(`${baseUrl}searchMulti?name=` + name, 
          { 
             headers: authHeader(),
          });
 
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
