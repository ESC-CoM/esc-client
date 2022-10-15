import { http } from 'src/api/core';

const checkEmailDuplicate = async (email: string): Promise<string> => {
  const response = await http.get(`/api/auth/duplicates/email/${email}`);
  return response.data;
};

const checkNicknameDuplicate = async (nickname: string): Promise<string> => {
  const response = await http.get(`/api/auth/duplicates/nickname/${nickname}`);
  return response.data;
};

const register = async (userInfo: req.UserInfo): Promise<number> => {
  const response = await http.post(`/api/auth/register`, userInfo);
  return response.data;
};

const sendAuthNum = async (phone: string): Promise<res.PhoneSuccess> => {
  const response = await http.post(`/api/sms`, phone);
  return response.data;
};

const checkAuthNum = async (code: number): Promise<boolean> => {
  const response = await http.post(`/api/sms/auth`, code);
  return response.data;
};

export {
  checkAuthNum,
  checkEmailDuplicate,
  checkNicknameDuplicate,
  register,
  sendAuthNum,
};
