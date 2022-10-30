import { getMeetingListRequestedByMe } from 'src/api/board';
import { queryKey } from 'src/constants/queryKey';

import { useCoreInfiniteQuery } from '../core';

export const useGetMeetingListRegisteredByMeQuery = (
  params?: req.BoardRequestedByMe
) => {
  return useCoreInfiniteQuery(
    queryKey.meetingListRegisteredByMe,
    () => getMeetingListRequestedByMe(params),
    {
      getNextPageParam: ({ pageable: { pageNumber } }) => pageNumber + 1,
    }
  );
};
