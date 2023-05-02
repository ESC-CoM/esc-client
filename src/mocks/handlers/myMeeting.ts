import { rest } from 'msw';

import {
  registerMeetingMocks,
  requestListForMeetingRegisteredMocks,
  requestMeetingMocks,
} from '../data';
import { paginating } from '../data/pagination';

export const getRequestListForMeetingRegistered = rest.get(
  `*/api/board/:id/request`,
  (req, res, ctx) => {
    const searchParams = req.url.searchParams;
    const { itemList, ...rest } =
      paginating<res.RequestListForMeetingRegisteredByMeContent>(
        searchParams,
        requestListForMeetingRegisteredMocks
      );

    return res(
      ctx.status(200),
      ctx.delay(300),
      ctx.json({
        content: itemList,
        ...rest,
      })
    );
  }
);

export const getMeetingRegisteredList = rest.get(
  `*/api/board/me`,
  (req, res, ctx) => {
    console.log('등록된 미팅 핸들러 실행');
    const searchParams = req.url.searchParams;
    const { itemList, ...rest } =
      paginating<res.BoardListRegisteredByMeContent>(
        searchParams,
        registerMeetingMocks
      );
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        content: itemList,
        ...rest,
      })
    );
  }
);

export const getRequestMeetingList = rest.get(
  `*/api/board/request/me`,
  (req, res, ctx) => {
    const searchParams = req.url.searchParams;
    const { itemList, ...rest } = paginating<res.RequestMeetingListByMeContent>(
      searchParams,
      requestMeetingMocks
    );
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        content: itemList,
        ...rest,
      })
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
