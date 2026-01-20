import axios from "axios";

const API_URL = `http://localhost:3000/api/v1`;

export const signUp = async (data) => {
  const response = await axios.post(`${API_URL}/auth/signup`, data, {
    withCredentials: true,
  });
  return response.data;
  // try {
  //   const response = await axios.post(`${API_URL}/auth/signup`, data, {
  //     withCredentials: true,
  //   });

  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  // }
};

export const login = async (data) => {
  const response = await axios.post(`${API_URL}/auth/login`, data, {
    withCredentials: true,
  });
  return response.data;
  // try {
  //   const response = await axios.post(`${API_URL}/auth/login`, data, {
  //     withCredentials: true,
  //   });
  //   console.log(response.data);
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  //   return {
  //     success: false,
  //     error: error.response?.data?.message || "Login failed",
  //     status: error.response?.status,
  //   };
  // }
};
