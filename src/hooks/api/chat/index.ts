import { useNavigate } from 'react-router-dom';
import { createChatRoom, getChatRoomInfo } from 'src/api/chat';
import { isAxiosError } from 'src/api/core';
import { queryKey } from 'src/constants/queryKey';
import { toastError, toastSuccess } from 'src/utils/toaster';

import { useCoreMutation, useCoreQuery } from '../core';

export const useCreateChatRoom = () => {
  const navigate = useNavigate();
  return useCoreMutation(createChatRoom, {
    onSuccess: (data) => {
      const {
        data: { id },
      } = data;
      const message =
        '미팅 신청을 수락했습니다. 채팅방에서 자유롭게 대화해보세요!';
      toastSuccess({ message });
      navigate(`/chat/room/${id}`);
    },
    onError: (error) => {
      if (isAxiosError<res.Error>(error) && !!error.response) {
        const message = '미팅 신청 오류입니다.\n다시 시도해주세요.';
        toastError({ message });
      }
    },
  });
};

export const useGetChatRoomInfo = (boardId: number) => {
  return useCoreQuery(queryKey.getChatRoomInfo, () => getChatRoomInfo(boardId));
};
