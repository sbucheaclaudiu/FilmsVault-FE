import axios from "axios";
import { authHeader } from "../auth/AuthContext";

const baseURL = "http://localhost:8080/moviesVault/getRandomMovies/";

export const getMovies = async (moviesType) => {
  try {
    const response = await axios.get(`${baseURL}${moviesType}`, 
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
    const response = await axios.get(`${baseURL}searchMulti?name=` + name, 
          { 
             headers: authHeader(),
          });
 
    return response.data;
  } catch (error) {
    //console.log(error);
    return [];
  }
}
