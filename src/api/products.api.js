import axios from "axios";
import qs from "qs";

const API_URL = `http://localhost:3000/api/v1`;

export const getProductById = async (productId) => {
  try {
    const res = await axios.get(`${API_URL}/products/${productId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (filters = {}) => {
  const { categories = [], priceRanges = [], page = 1 } = filters;
  try {
    const params = {};

    if (categories.length > 0) {
      params.category = categories.join(",");
    }

    if (priceRanges.length > 0) {
      params.priceRanges = priceRanges;
    }

    params.page = page;

    const response = await axios.get(`${API_URL}/products`, {
      params,
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRelatedProducts = async (productId) => {
  try {
    const product = await getProductById(productId);
    const res = await axios.get(`${API_URL}/products`, {
      params: { brand: product.brand },
    });

    return res.data.data.filter((p) => p._id !== productId);
  } catch (error) {
    console.log(error);
  }
};

export const getNewProducts = async () => {
  try {
    const res = await axios.get(`${API_URL}/products/new-arrivals`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFeaturedProducts = async () => {
  try {
    const res = await axios.get(`${API_URL}/products/featured`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

getFeaturedProducts()


export const getBestSellers = async () => {
  try {
    const res = await axios.get(`${API_URL}/products/best-sellers`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
