import axios from "axios";

const baseURL = "http://localhost:8080/moviesVault/auth";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${baseURL}/login`, {
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
    const response = await axios.post(`${baseURL}/signup`, {
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