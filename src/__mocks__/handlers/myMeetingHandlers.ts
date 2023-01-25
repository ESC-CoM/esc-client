import { rest } from 'msw';

import {
  applyMeetingMocks,
  registerMeetingMocks,
  requestListForMeetingRegisteredMocks,
} from '../data';

export const getRequestListForMeetingRegistered = rest.get(
  '/api/board/:id/request',
  (_, res, ctx) => {
    res(ctx.json(requestListForMeetingRegisteredMocks));
  }
);

export const getMeetingRegisteredList = rest.get(
  '/api/board/me',
  (_, res, ctx) => {
    res(ctx.json(registerMeetingMocks));
  }
);

export const getMeetingApplyList = rest.get(
  '/api/request/board/me',
  (_, res, ctx) => {
    res(ctx.json(applyMeetingMocks));
  }
);
