const API_URL = "http://localhost:3001/api";
import axios from "axios";
export const addRegion = async (data) => {
    console.log(data, "data")
  try {
    const response = await axios.post(`${API_URL}/region/addRegion`, data)

    return response;
  } catch (error) {
    throw new Error(`Failed to add blog: ${error.message}`);
  }
};

export const getRegion = async (data) => {
    console.log(data, "data")
  try {
    const response = await axios.get(`${API_URL}/region/getRegion`)

    return response;
  } catch (error) {
    throw new Error(`Failed to add blog: ${error.message}`);
  }
};
