import { createMeeting, getMeetingDetail, getMeetingList } from 'src/api/home';
import { queryKey } from 'src/constants/queryKey';
import { toastError, toastSuccess } from 'src/utils/toaster';

import { useCoreInfiniteQuery, useCoreMutation, useCoreQuery } from '../core';

export const useMeetingItemListQuery = (params?: req.Home) => {
  return useCoreInfiniteQuery(
    queryKey.meetingItemList,
    () => getMeetingList(params),
    {
      getNextPageParam: ({ page, last }) => (last ? page : page + 1),
    }
  );
};

export const useCreateMeetingQuery = () => {
  return useCoreMutation(createMeeting, {
    onSuccess: () => {
      const message =
        '미팅 등록이 완료되었습니다.\n내 미팅에서 등록한 미팅을 확인할 수 있어요';
      toastSuccess({ message });
    },
    onError: () => {
      const message = '미팅 등록에 실패했습니다.\n다시 시도해주세요.';
      toastError({ message });
    },
  });
};

export const useMeetingItemDetailQuery = (id: number) => {
  return useCoreQuery(queryKey.meetingItemDetailFunc(id), () =>
    getMeetingDetail(id)
  );
};
