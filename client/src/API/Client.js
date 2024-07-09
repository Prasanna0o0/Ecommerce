import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; // Replace with your API base URL

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000, // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export const request = async ({ method, url, data = null, config = {} }) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error(`Error making ${method} request to ${url}:`, error);
    throw error;
  }
};
