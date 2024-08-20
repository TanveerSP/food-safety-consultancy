import axios from "axios";

// Creating an axios instance with default configuration
export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, // Set the base URL
    timeout: 10000, // Optional: Set a timeout for requests (10 seconds)
    headers: {
        "Content-Type": "application/json", // Default content type
        // Add more default headers if needed
    },
});

// API Connector function to make requests using the axios instance
export const apiConnector = (method, url, bodyData = null, headers = null, params = null) => {
    return axiosInstance({
        method: method,
        url: url,
        data: bodyData, // data is set to null if bodyData is not provided
        headers: headers, // headers are set to null if not provided
        params: params, // params are set to null if not provided
    });
};
