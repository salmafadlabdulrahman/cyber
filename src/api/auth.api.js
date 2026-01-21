import axios from "axios";

const API_URL = `http://localhost:3000/api/v1`;

export const signUp = async (data) => {
  const response = await axios.post(`${API_URL}/auth/signup`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const login = async (data) => {
  const response = await axios.post(`${API_URL}/auth/login`, data, {
    withCredentials: true,
  });
  return response.data;
};
