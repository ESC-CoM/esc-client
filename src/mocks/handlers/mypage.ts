import { rest } from 'msw';

import { mypageMocks } from '../data';

export const getMyInfo = rest.get(
  `*/api/userInfo/detail/token`,
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.delay(300), ctx.json(mypageMocks));
  }
);
