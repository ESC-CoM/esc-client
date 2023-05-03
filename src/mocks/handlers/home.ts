import { rest } from 'msw';

import { meetingBoardMocks } from '../data';
import { paginating } from '../data/pagination';

export const getHomeBoard = rest.get(`*/api/board`, (req, res, ctx) => {
  const searchParams = req.url.searchParams;
  const { itemList, last, pageable } = paginating<res.MeetingSummary>(
    searchParams,
    meetingBoardMocks
  );
  return res(
    ctx.status(200),
    ctx.delay(1000),
    ctx.json({
      boardListDtos: itemList,
      last,
      page: pageable.pageNumber,
    })
  );
});
