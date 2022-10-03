import {
  checkEmailDuplicate,
  checkNicknameDuplicate,
  register,
} from 'src/api/join';
import { queryKey } from 'src/constants/queryKey';

import { useCoreQuery } from '../core';

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

export const useRegisterQuery = (userInfo: res.UserInfo) => {
  return useCoreQuery(
    queryKey.registerFunc(userInfo),
    () => register(userInfo),
    {
      enabled: !!userInfo.isAgree,
    }
  );
};
