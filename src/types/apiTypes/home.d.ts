declare namespace req {
  export type Home = {
    page: number;
    size: number;
    ownerId?: string | null;
    headCount?: string | null;
    university?: string | null;
    gender?: string | null;
    meetingStatus?: string | null;
  };
  export type CreateMeeting = {
    title: string;
    content: string;
    headCount: number;
    participants: number[];
  };
  export type RequestMeeting = {
    boardId: number;
    body: {
      title: string;
      message: string;
      participants: number[];
    };
  };
}

declare namespace res {
  export type MeetingSummary = {
    id: number;
    title: string;
    headCount: number; // 미팅을 주선하는 쪽의 인원수
    gender: string;
    university: string[];
    createdAt: string;
    profileImages: string[];
  };
  export type MeetingFeed = {
    page: number;
    last: boolean;
    boardListDtos: MeetingSummary[];
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
