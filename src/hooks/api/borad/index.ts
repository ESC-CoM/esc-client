import { getMeetingListRegisteredByMe } from 'src/api/board';
import { queryKey } from 'src/constants/queryKey';

import { useCoreInfiniteQuery } from '../core';

export const useGetMeetingListRegisteredByMeQuery = (
  params?: req.BoardListRegisteredByMe
) => {
  return useCoreInfiniteQuery(
    queryKey.meetingListRegisteredByMe,
    () => getMeetingListRegisteredByMe(params),
    {
      getNextPageParam: ({ pageable: { pageNumber } }) => pageNumber + 1,
    }
  );
};
