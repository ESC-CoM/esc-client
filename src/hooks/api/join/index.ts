import {
  checkAuthNum,
  checkEmailDuplicate,
  checkNicknameDuplicate,
  register,
  sendAuthNum,
} from 'src/api/join';
import { queryKey } from 'src/constants/queryKey';

import { useCoreMutation, useCoreQuery } from '../core';

export const useEmailDuplicateQuery = (email: string) => {
  return useCoreQuery(
    queryKey.checkEmailDuplicateFunc(email),
    () => checkEmailDuplicate(email),
    {
      enabled: !!email,
    }
  );
};

export const useNicknameDuplicateQuery = (nickname: string) => {
  return useCoreQuery(
    queryKey.checkNicknameDuplicateFunc(nickname),
    () => checkNicknameDuplicate(nickname),
    {
      enabled: !!nickname,
    }
  );
};

export const useRegister = () => {
  return useCoreMutation(register, {
    onSuccess: (data) => {
      // const { message, data } = data;
      // console.log(message); // TODO: 토스트 메시지
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const usePhoneQuery = (phone: string) => {
  return useCoreQuery(queryKey.phoneFunc(phone), () => sendAuthNum(phone), {
    enabled: !!phone,
  });
};

export const useAuthNumQuery = (code: number) => {
  return useCoreQuery(queryKey.authNumFunc(code), () => checkAuthNum(code), {
    enabled: !!code,
  });
};
