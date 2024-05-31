const API_URL = "http://localhost:3001/api";
import axios from "axios";
export const addDestination = async (data) => {
    console.log(data, "data")
  try {
    const response = await axios.post(`${API_URL}/destination/addDestination`, data)

    return response;
  } catch (error) {
    throw new Error(`Failed to add blog: ${error.message}`);
  }
};


export const getDestination = async (data) => {
    console.log(data, "data")
  try {
    const response = await axios.get(`${API_URL}/destination/getDestination`)

    return response;
  } catch (error) {
    throw new Error(`Failed to add blog: ${error.message}`);
  }
};
