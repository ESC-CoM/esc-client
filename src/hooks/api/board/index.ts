import { getRequestListForMeetingRegisteredByMe } from 'src/api/board';
import { getMeetingListRequestedByMe } from 'src/api/board';
import { queryKey } from 'src/constants/queryKey';

import { useCoreInfiniteQuery } from '../core';

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
      enabled: !!boardId && boardId > -1,
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
