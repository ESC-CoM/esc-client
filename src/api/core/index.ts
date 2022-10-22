import axios, { AxiosError, AxiosInstance } from 'axios';
import { ACCESSTOKEN } from 'src/constants/auth';
import { getAccessToken, setAccessToken } from 'src/utils/auth';
import { getRefreshToken } from 'src/utils/auth';
import { toastError, toastSuccess } from 'src/utils/toaster';

import { authRefresh } from '../auth';

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
    if (isAxiosError<res.Error>(err) && err.response) {
      const { status, code } = err.response.data;
      if (status === 404) {
        window.location.href = '/home';
      } else if (status === 403 && code === 'INVALID_REFRESH_TOKEN') {
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();
        try {
          const response = await authRefresh({ accessToken, refreshToken });
          const {
            data: { accessToken: access },
          } = response;
          setAccessToken(access);
          toastSuccess({ message: '재인증 완료' });
        } catch {
          window.location.href = '/login';
          toastError({ message: '다시 인증해야 합니다.' });
        }
      }
    }
    return Promise.reject(err);
  }
);

export { http };
