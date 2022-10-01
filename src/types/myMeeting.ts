export type MyMeetingType = {
  kind: string;
  title: string;
  content: string;
  friends: { nickName: string; src: string }[];
  date: string;
};

export type MyMeetingRequestType = {
  boardId: number;
  title: string;
  requestedInfo: { id: number; nickName: string; src: string }[];
  date: string;
  state?: boolean;
};
