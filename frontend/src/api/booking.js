const API_URL = "http://localhost:3001/api";
import axios from "axios";
export const addBooking = async (data) => {
    console.log(data, "data")
  try {
    const response = await axios.post(`${API_URL}/booking/addBooking`, data)

    return response;
  } catch (error) {
    throw new Error(`Failed to add blog: ${error.message}`);
  }
};


export const getBooking= async (data) => {
    console.log(data, "data")
  try {
    const response = await axios.get(`${API_URL}/booking/getBooking`)

    return response;
  } catch (error) {
    throw new Error(`Failed to add blog: ${error.message}`);
  }
};
