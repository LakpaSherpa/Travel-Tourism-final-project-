const API_URL = "http://localhost:3001/api";
import axios from "axios";
export const addBlog = async (data) => {
    console.log(data, "data")
  try {
    const response = await axios.post(`${API_URL}/blog/createBlog`, data)

    return response;
  } catch (error) {
    throw new Error(`Failed to add blog: ${error.message}`);
  }
};


export const getBlog= async (data) => {
    console.log(data, "data")
  try {
    const response = await axios.get(`${API_URL}/blog/getBlog`)

    return response;
  } catch (error) {
    throw new Error(`Failed to add blog: ${error.message}`);
  }
};
