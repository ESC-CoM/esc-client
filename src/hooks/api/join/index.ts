import { isAxiosError } from 'src/api/core';
import {
  checkEmailDuplicate,
  checkNicknameDuplicate,
  register,
  uploadProfileImage,
} from 'src/api/join';
import { queryKey } from 'src/constants/queryKey';
import { toastError, toastSuccess } from 'src/utils/toaster';

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

export const useUploadProfileImage = () => {
  return useCoreMutation(uploadProfileImage, {
    onSuccess: (data) => {
      const { message } = data;
      toastSuccess({ message });
    },
    onError: (error) => {
      if (isAxiosError<res.AuthError>(error) && !!error.response) {
        const { message } = error.response.data;
        toastError({ message });
      }
    },
  });
};
