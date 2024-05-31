import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response;
    } catch (error) {
        throw new Error(`Failed to upload file: ${error.message}`);
    }
};
