import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { http };
