import axios from "axios";
import { authHeader, getUser } from "../auth/AuthContext";
import { baseURL } from "./utils";

const baseUrl = `${baseURL}/playlist/`;

export const getPlaylists = async () => {
  try {
    const user = getUser();
    const response = await axios.get(`${baseUrl}getPlaylistsByUser?userId=` + user.id, 
          { 
             headers: authHeader(),
          });
 
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getPlaylistById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}getPlaylistById?id=` + id, 
          { 
             headers: authHeader(),
          });
 

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getMovieFromPlaylist = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}getMoviesFromPlaylist?playlistId=` + id, 
          { 
             headers: authHeader(),
          });
 

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const createPlaylist = async (name, description, imagePath, privatePlaylist) => {
    try {
      const user = getUser();

      const playlistData = {
        name: name,
        description: description,
        imagePath: "https://imgur.com/JZX5IJ2",
        privatePlaylist: privatePlaylist,
        userId: user.id,
      };

      const response = await axios.post(`${baseUrl}createPlaylist`, playlistData,
            { 
               headers: authHeader(),
            });
   
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }