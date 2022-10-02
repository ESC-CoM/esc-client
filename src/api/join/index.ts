import { http } from 'src/api/core';

const checkEmailDuplicate = async (email: string): Promise<string> => {
  const response = await http.get(`/api/auth/duplicates/${email}`);
  return response.data;
};

const register = async (userInfo: res.UserInfo): Promise<number> => {
  const response = await http.post(`/api/auth/register`, userInfo);
  return response.data;
};

export { checkEmailDuplicate, register };
