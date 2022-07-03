export type MyMeetingType = {
  title: string;
  content: string;
  friends: string[];
  date: string;
};

export type MyMeetingRequestType = {
  chatterIds: number[];
  chattingRoomName: string;
  comment: string;
  profileImg: string[];
  date: string;
  state?: boolean;
};
