export type MyMeetingType = {
  id: number;
  kind: string;
  title: string;
  content: string;
  friends: { nickName: string; src: string }[];
  date: string;
};

export type MyMeetingRequestType = {
  id: number;
  comment: string;
  requestedInfo: { nickName: string; src: string }[];
  date: string;
  state?: boolean;
  onDeleteClick?: () => void;
};
