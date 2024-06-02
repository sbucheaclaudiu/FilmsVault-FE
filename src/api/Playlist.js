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

export const getPlaylistByUser = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}getPlaylistsByUser?userId=` + userId, 
          { 
             headers: authHeader(),
          });
 
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getRandomPlaylists = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}getRandomPlaylists?userId=` + userId, 
          { 
             headers: authHeader(),
          });
 
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getPlaylistsByName = async (name) => {
  try {
    const response = await axios.get(`${baseUrl}getPlaylistsByName?name=` + name, 
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

export const deletePlaylist = async (playlistId) => {
  try {
    const response = await axios.get(`${baseUrl}deletePlaylist?playlistId=` + playlistId, 
          { 
             headers: authHeader(),
          });

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const createPlaylist = async (name, description, imageBase64, privatePlaylist) => {
    try {
      const user = getUser();

      let base64WithoutPrefix = "";

      if(imageBase64 != null){
        base64WithoutPrefix = imageBase64.replace(/^data:image\/(jpeg|jpg);base64,/, "");
      }
      
      const playlistData = {
        name: name,
        description: description,
        imageBase64: base64WithoutPrefix,
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

  export const updatePlaylist = async (id, name, description, imageBase64, privatePlaylist) => {
    try {
      const user = getUser();

      let base64WithoutPrefix = "";

      if(imageBase64 != null){
        base64WithoutPrefix = imageBase64.replace(/^data:image\/(jpeg|jpg);base64,/, "");
      }

      const playlistData = {
        playlistId: id,
        name: name,
        description: description,
        imagePath: base64WithoutPrefix,
        privatePlaylist: privatePlaylist,
        userId: user.id,
      };

      const response = await axios.post(`${baseUrl}updatePlaylist`, playlistData,
            { 
               headers: authHeader(),
            });
   
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }