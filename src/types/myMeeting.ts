import { ProfileImg } from './profile';

export type MyMeetingType = {
  kind: string;
  title: string;
  content: string;
  friends: { nickName: string; src: string }[];
  date: string;
};

export type MyMeetingRequestType = {
  boardId: number;
  comment: string;
  requestedInfo: { nickName: string; src: string }[];
  date: string;
  state?: boolean;
};
