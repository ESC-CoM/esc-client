declare namespace req {
  export type Home = {
    page: number;
    size: number;
    ownerId: string | null;
    headCount: string | null;
    university: string | null;
    gender: string | null;
    meetingStatus: string | null;
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
