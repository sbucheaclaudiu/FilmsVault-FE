import axios from "axios";
import { authHeader, getUser } from "../auth/AuthContext";
import { baseURL } from "./utils";

const baseUrl = `${baseURL}/user/`;

export const updateUser = async (id, username, name, email, imageBase64) => {
    try {

      let base64WithoutPrefix = "";

      if(imageBase64 != null){
        base64WithoutPrefix = imageBase64.replace(/^data:image\/(jpeg|jpg);base64,/, "");
      }

      const userData = {
        id: id,
        name: name,
        username: username,
        email: email,
        profileUrl: base64WithoutPrefix,
      };

      console.log(userData);

      const response = await axios.post(`${baseUrl}updateAccount`, userData,
            { 
               headers: authHeader(),
            });
   
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export const getUserById = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}getUser?userId=` + id, 
            { 
               headers: authHeader(),
            });
   
  
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  export const deleteUser = async (userId) => {
    try {
      const response = await axios.get(`${baseUrl}deleteUser?userId=` + userId, 
            { 
               headers: authHeader(),
            });
  
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }