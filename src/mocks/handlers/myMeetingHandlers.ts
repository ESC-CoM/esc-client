import { rest } from 'msw';
import { API_SERVER_URL } from 'src/constants/env';

import {
  registerMeetingMocks,
  requestListForMeetingRegisteredMocks,
  requestMeetingMocks,
} from '../data';
import { pagination } from '../data/pagination';

export const getRequestListForMeetingRegistered = rest.get(
  `${API_SERVER_URL}api/board/:id/request`,
  (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(300),
      ctx.json({
        content: requestListForMeetingRegisteredMocks,
        pageable: pagination,
      })
    );
  }
);

export const getMeetingRegisteredList = rest.get(
  '/api/board/me',
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(registerMeetingMocks));
  }
);

export const getRequestMeetingList = rest.get(
  `${API_SERVER_URL}api/board/request/me`,
  (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(300),
      ctx.json({ content: requestMeetingMocks, pageable: pagination })
    );
  }
);

export const deleteBoardRequestedByMe = rest.delete(
  '/api/board/request/:id',
  (req, res, ctx) => {
    const { id } = req.params;
    const message = `ID ${id} 신청을 취소했습니다.`;
    return res(ctx.status(200), ctx.json({ message }));
  }
);
