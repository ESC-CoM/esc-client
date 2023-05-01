import * as myMeetingHandlers from './myMeetingHandlers';
import * as mypageHandlers from './mypage';

export const handlers = [
  ...Object.values(myMeetingHandlers),
  ...Object.values(mypageHandlers),
];
