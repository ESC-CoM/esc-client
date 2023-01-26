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

export const deleteBoardRequestedByMe = rest.delete(
  '/api/board/request/:id',
  (req, res, ctx) => {
    const { id } = req.params;
    const message = `ID ${id} 신청을 취소했습니다.`;
    return res(ctx.status(200), ctx.json({ message }));
  }
);
