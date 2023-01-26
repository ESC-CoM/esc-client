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
