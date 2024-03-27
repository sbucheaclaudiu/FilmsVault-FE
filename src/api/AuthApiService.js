import axios from "axios";
import { baseURL } from "./utils";

const baseUrl = `${baseURL}/auth`;

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      email: email,
      password: password,
      });
      
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export const signupUser = async (name, username, email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, {
      name: name,
      username: username,
      email: email,
      password: password,
      });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}