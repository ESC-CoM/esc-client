import { getRequestListForMeetingRegisteredByMe } from 'src/api/board';
import { queryKey } from 'src/constants/queryKey';

import { useCoreQuery } from '../core';

export const useGetRequestListForMeetingRegisteredByMe = ({
  boardId,
  params,
}: req.RequestListForMeetingRegisteredByMe) =>
  useCoreQuery(queryKey.requestListForMeetingRegisteredByMeFunc(boardId), () =>
    getRequestListForMeetingRegisteredByMe({ boardId, params })
  );
