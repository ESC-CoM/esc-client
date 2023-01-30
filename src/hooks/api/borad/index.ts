import { getMeetingListRegisteredByMe } from 'src/api/board';
import { queryKey } from 'src/constants/queryKey';

import { useCoreInfiniteQuery } from '../core';

export const useGetMeetingListRegisteredByMeQuery = (
  params?: req.BoardListRegisteredByMe
) => {
  return useCoreInfiniteQuery(
    queryKey.meetingListRegisteredByMe,
    ({ pageParam = 0 }) =>
      getMeetingListRegisteredByMe({ ...params, page: pageParam }),
    {
      getNextPageParam: ({ pageable: { pageNumber } }) => pageNumber + 1,
    }
  );
};
