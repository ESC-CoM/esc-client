import { getRequestListForMeetingRegisteredByMe } from 'src/api/board';
import { queryKey } from 'src/constants/queryKey';

import { useCoreInfiniteQuery } from '../core';

export const useGetRequestListForMeetingRegisteredByMe = ({
  boardId,
  params,
}: {
  boardId: req.RequestListForMeetingRegisteredByMe['boardId'];
  params: Omit<req.RequestListForMeetingRegisteredByMe['params'], 'page'>;
}) =>
  useCoreInfiniteQuery(
    queryKey.requestListForMeetingRegisteredByMeFunc(boardId),
    ({ pageParam = 0 }) =>
      getRequestListForMeetingRegisteredByMe({
        boardId,
        params: { ...params, page: pageParam },
      }),
    {
      getNextPageParam: (response) => {
        if ('status' in response) return; // error
        return response.page + 1;
      },
      enabled: boardId > -1,
    }
  );
