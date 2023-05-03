import axios, { AxiosError, AxiosInstance } from 'axios';
import {
  ACCESSTOKEN,
  TOKEN_EXPIRED,
  USER_NOT_EXISTED,
} from 'src/constants/auth';
import { API_SERVER_URL } from 'src/constants/env';
import { getAccessToken, setAccessToken } from 'src/utils/auth';
import { getRefreshToken } from 'src/utils/auth';
import { toastError, toastSuccess } from 'src/utils/toaster';

import { authRefresh } from '../auth';

const http: AxiosInstance = axios.create({
  baseURL: API_SERVER_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    // [ACCESSTOKEN]: getAccessToken(),
  },
});

export function isAxiosError<ResponseType>(
  error: unknown
): error is AxiosError<ResponseType> {
  return axios.isAxiosError(error);
}

export const refreshAccessToken = async (err: AxiosError) => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  try {
    // TODO: Login 다시 짜기
    const response = await authRefresh({ accessToken, refreshToken });
    const { data } = response;
    setAccessToken(data);
    toastSuccess({ message: '재인증 완료' });
    http.defaults.headers[ACCESSTOKEN] = data;
    if (err.config.headers) err.config.headers[ACCESSTOKEN] = data;
    const reResponse = await http.request(err.config);
    return reResponse;
  } catch (error) {
    window.location.href = '/login';
    toastError({ message: '다시 로그인해야 합니다.' });
    return Promise.reject(error);
  }
};

// http.interceptors.request.use((config) => {
//   const token = getAccessToken();
//   if (token && config.headers) {
//     config.headers[ACCESSTOKEN] = token;
//   }
//   return config;
// });

http.interceptors.response.use(
  // TODO: test 필요
  (res) => res,
  async (err) => {
    if (isAxiosError<res.Error>(err) && err.response) {
      const { status, code } = err.response.data;
      if (status === 404) {
        window.location.href = '/home';
      } else if (status === 400 && code === USER_NOT_EXISTED) {
        window.location.href = '/home';
        toastError({ message: '아직 가입이 승인되지 않은 유저입니다.' });
      } else if (status === 403 && code === TOKEN_EXPIRED) {
        refreshAccessToken(err);
      } else if (status === 403) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(err);
  }
);

export { http };
