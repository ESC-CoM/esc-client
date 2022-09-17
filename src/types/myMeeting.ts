export type MyMeetingType = {
  title: string;
  content: string;
  friends: { nickName: string; src: string }[];
  date: string;
};

export type MyMeetingRequestType = {
  comment: string;
  requestedInfo: { nickName: string; profileImg: string }[];
  date: string;
  state?: boolean;
};
