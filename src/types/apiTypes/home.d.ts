declare namespace req {
  export type Home = {
    page: string;
    size: string;
    ownerId: string | null;
    headCount: string | null;
    university: string | null;
    gender: string | null;
    meetingStatus: string | null;
  };
  export type CreateMeeting = {
    title: string;
    content: string;
    headCount: number;
    participants: number[];
  };
}

declare namespace res {
  export type MeetingFeed = {
    page: number;
    last: boolean;
    boardListDtos: T[];
  };
  export type MeetingSummary = {
    id: number;
    title: string;
    content: string;
    headCount: number; // 미팅을 주선하는 쪽의 인원수
    gender: string;
    meetingStatus: string;
    university: string[];
    createdAt: string;
    profileImages: string[];
  };
  type Participant = {
    schoolInfo: {
      school: string;
      major: string;
      class: string;
    };
    email: string;
    phone: string;
    birth: string;
    profileImage: string;
    weight: number;
    height: number;
    message: string;
  };
  export type CreateMeeting = {
    id: number;
    title: string;
    content: string;
    headCount: number;
    createdAt: string;
    meetingStatus: string;
    owner: Participant;
    participants: Participant[];
  };
  export type MeetingDetail = {
    title: string;
    content: string;
    participants: {
      id: number;
      nickname: string;
      birth: string;
      profileImage: string;
      university: string;
      studentId: string;
      physicalInfo: {
        height: string;
        weight: string;
      };
      otherInfo: {
        gender: res.GENDERType;
        mbti: res.MBTIType;
        amountOfAlchol: number;
      };
    }[];
  };
}
