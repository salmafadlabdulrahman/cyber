import axios from "axios";

const API_URL = `http://localhost:3000/api/v1`;

export const getCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/categories`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

getCategories()