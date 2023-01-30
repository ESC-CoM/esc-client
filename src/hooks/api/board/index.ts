import { patchAllowOrRejectRequest } from 'src/api/board';
import { deleteRequestByMe } from 'src/api/board';
import { getRequestListForMeetingRegisteredByMe } from 'src/api/board';
import { getMeetingListRequestedByMe } from 'src/api/board';
import { queryKey } from 'src/constants/queryKey';
import { queryClient } from 'src/index';
import { toastError, toastSuccess } from 'src/utils/toaster';

import { useCoreMutation } from '../core';
import { useCoreInfiniteQuery } from '../core';

export const usePatchAllowRequest = (boardId: number) => {
  return useCoreMutation(
    (requestId: number) => patchAllowOrRejectRequest(requestId, 'ALLOWED'),
    {
      onSuccess: (response) => {
        queryClient.invalidateQueries(
          queryKey.requestListForMeetingRegisteredByMe(boardId)
        );
        const { message } = response;
        toastSuccess({ message });
      },
      onError: () => {
        toastError({ message: '신청 수락을 실패했습니다.' });
      },
    }
  );
};

export const usePatchRejectRequest = (boardId: number) => {
  return useCoreMutation(
    (requestId: number) => patchAllowOrRejectRequest(requestId, 'REJECTED'),
    {
      onSuccess: (response) => {
        queryClient.invalidateQueries(
          queryKey.requestListForMeetingRegisteredByMe(boardId)
        );
        const { message } = response;
        toastSuccess({ message });
      },
      onError: () => {
        toastError({ message: '신청 거절을 실패했습니다.' });
      },
    }
  );
};

export const useDeleteRequestByMe = () => {
  return useCoreMutation((id: number) => deleteRequestByMe(id), {
    onSuccess: (res) => {
      const { message } = res;
      toastSuccess({ message });
      queryClient.invalidateQueries(queryKey.meetingListRequestedByMe);
    },
    onError: () => {
      toastError({ message: '신청 취소를 실패했습니다.' });
    },
  });
};

type RequestListForMeetingRegisteredByMe = {
  boardId: req.RequestListForMeetingRegisteredByMe['boardId'];
  params: Omit<req.RequestListForMeetingRegisteredByMe['params'], 'page'>;
};

export const useGetRequestListForMeetingRegisteredByMe = ({
  boardId,
  params,
}: RequestListForMeetingRegisteredByMe) =>
  useCoreInfiniteQuery(
    queryKey.requestListForMeetingRegisteredByMe(boardId),
    ({ pageParam = 0 }) =>
      getRequestListForMeetingRegisteredByMe({
        boardId,
        params: { ...params, page: pageParam },
      }),
    {
      getNextPageParam: ({ pageable: { pageNumber }, last }) =>
        last ? undefined : pageNumber + 1,
      enabled: boardId > -1,
    }
  );

export const useGetMeetingListRequestedByMe = (
  params?: Omit<req.RequestMeetingByMe, 'page'>
) => {
  return useCoreInfiniteQuery(
    queryKey.meetingListRequestedByMe,
    ({ pageParam = 0 }) =>
      getMeetingListRequestedByMe({ ...params, page: pageParam }),
    {
      getNextPageParam: ({ pageable: { pageNumber }, last }) =>
        last ? undefined : pageNumber + 1,
    }
  );
};
