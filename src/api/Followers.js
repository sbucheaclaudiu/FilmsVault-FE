import axios from "axios";
import { authHeader, getUser } from "../auth/AuthContext";
import { baseURL } from "./utils";

const baseUrl = `${baseURL}/followers/`;

export const addFollower = async (followedUserId) => {
    try {
      const user = getUser();
      
      const addFollowData = {
        userId: user.id,
        followedUserId: followedUserId,
      };

      const response = await axios.post(`${baseUrl}addFollowUser`, addFollowData,
            { 
               headers: authHeader(),
            });
   
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export const getFollowersByUser = async () => {
    try {
      const user = getUser();

      const response = await axios.get(`${baseUrl}getFollowersByUser?userId=` + user.id,
            { 
               headers: authHeader(),
            });
   
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export const removeFollower = async (followedUserId) => {
    try {
      const user = getUser();
      
      const deleteFollowData = {
        userId: user.id,
        followedUserId: followedUserId,
      };

      const response = await axios.post(`${baseUrl}deleteFollower`, deleteFollowData,
            { 
               headers: authHeader(),
            });
   
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }