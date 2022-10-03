import axios, { AxiosError, AxiosInstance } from 'axios';
import { Navigate } from 'react-router-dom';
import { ACCESSTOKEN } from 'src/constants/auth';
import { getAccessToken, setAccessToken } from 'src/utils/auth';

import { authRefresh } from '../auth';
import { getRefreshToken } from './../../utils/auth';

const http: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function isAxiosError<ResponseType>(
  error: unknown
): error is AxiosError<ResponseType> {
  return axios.isAxiosError(error);
}

http.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers[ACCESSTOKEN] = token;
  }
  return config;
});

http.interceptors.response.use(
  // TODO: test 필요
  (res) => res,
  async (err) => {
    const { status, code } = err.response.data;
    if (status === 404) {
      Navigate({ to: '/home' });
    } else if (status === 403 && code === 'INVALID_REFRESH_TOKEN') {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();
      try {
        const response = await authRefresh({ accessToken, refreshToken });
        const {
          status,
          data: { accessToken: access },
        } = response;
        setAccessToken(access);
        console.log(status); // TODO: 토스트 메시지
      } catch {
        Navigate({ to: '/login' });
      }
    }
    return Promise.reject(err);
  }
);

export { http };
