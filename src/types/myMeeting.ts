export type MyMeetingType = {
  kind: string;
  title: string;
  content: string;
  friends: { nickName: string; src: string }[];
  date: string;
};
