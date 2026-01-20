import axios from "axios";

const API_URL = `http://localhost:3000/api/v1`;

export const signUp = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, data, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/login`,
      { email, password },
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
