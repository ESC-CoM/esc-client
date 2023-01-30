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

export const patchAllowOrRejectRequest = rest.patch(
  '/board/request/:requestId',
  async (req, res, ctx) => {
    const { requestId } = req.params;
    const action = await req.json();
    if (action === 'ALLOWED') {
      const message = `ID ${requestId} 요청을 수락했습니다.`;
      return res(ctx.status(200), ctx.json({ message }));
    }
    if (action === 'REJECTED') {
      const message = `ID ${requestId} 요청을 거절했습니다.`;
      return res(ctx.status(200), ctx.json({ message }));
    }
    return res(ctx.status(400), ctx.json({ message: '잘못된 요청입니다.' }));
  }
);
