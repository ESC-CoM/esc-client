import { Navigate } from 'react-router-dom';
import {
  checkEmailDuplicate,
  checkNicknameDuplicate,
  register,
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

const NEXT_PATH = '/join/welcome';

export const useRegister = () => {
  return useCoreMutation(register, {
    onSuccess: (data) => {
      // const { message, data } = data;
      // console.log(message); // TODO: 토스트 메시지
      Navigate({ to: NEXT_PATH });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
