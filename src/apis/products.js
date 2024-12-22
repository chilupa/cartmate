import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_PRODCUTS_API}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
