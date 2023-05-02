import * as homeHandlers from './home';
import * as myMeetingHandlers from './myMeeting';
import * as mypageHandlers from './mypage';

export const handlers = [
  ...Object.values(myMeetingHandlers),
  ...Object.values(mypageHandlers),
  ...Object.values(homeHandlers),
];
