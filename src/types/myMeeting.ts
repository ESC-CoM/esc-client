export type MyMeetingType = {
  title: string;
  content: string;
  friends: string[];
  date: string;
};

export type MyMeetingRequestType = {
  comment: string;
  profileImg: string[];
  date: string;
  state?: boolean;
};
