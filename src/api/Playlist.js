import axios from "axios";
import { authHeader, getUser } from "../auth/AuthContext";

const baseURL = "http://localhost:8080/moviesVault/playlist/";

export const getPlaylists = async () => {
  try {
    const user = getUser();
    const response = await axios.get(`${baseURL}getPlaylists?userId=` + user.id, 
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

      const response = await axios.post(`${baseURL}createPlaylist`, playlistData,
            { 
               headers: authHeader(),
            });
   
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }