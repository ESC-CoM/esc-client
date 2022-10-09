import { ACCESSTOKEN, REFRESHTOKEN } from 'src/constants/auth';

export const setAccessToken = (token: string | null) => {
  localStorage.setItem(ACCESSTOKEN, token || '');
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESSTOKEN);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESHTOKEN);
};

export const setRefreshToken = (token: string | null) => {
  localStorage.setItem(REFRESHTOKEN, token || '');
};

export const logout = () => {
  localStorage.removeItem(ACCESSTOKEN);
};
