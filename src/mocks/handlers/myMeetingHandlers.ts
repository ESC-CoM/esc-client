import { rest } from 'msw';

import {
  applyMeetingMocks,
  registerMeetingMocks,
  requestListForMeetingRegisteredMocks,
} from '../data';

export const getRequestListForMeetingRegistered = rest.get(
  '/api/board/:id/request',
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(requestListForMeetingRegisteredMocks));
  }
);

export const getMeetingRegisteredList = rest.get(
  '/api/board/me',
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(registerMeetingMocks));
  }
);

export const getMeetingApplyList = rest.get(
  '/api/request/board/me',
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(applyMeetingMocks));
  }
);

export const patchAllowOrRejectRequest = rest.patch(
  '/board/request/:requestId',
  async (req, res, ctx) => {
    const { requestedId } = req.params;
    const action = await req.json();
    if (action === 'ALLOWED') {
      const message = `ID ${requestedId} 요청을 수락했습니다.`;
      return res(ctx.status(200), ctx.json({ message }));
    }
    if (action === 'REJECTED') {
      const message = `ID ${requestedId} 요청을 거절했습니다.`;
      return res(ctx.status(200), ctx.json({ message }));
    }
    return res(ctx.status(400), ctx.json({ message: '잘못된 요청입니다.' }));
  }
);
