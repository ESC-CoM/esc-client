declare namespace req {
  export type RequestMeetingByMe = {
    page?: number;
    size?: number;
    sort?: string[];
    boardId?: number;
  };
}

declare namespace res {
  export type ParticipantStatus = 'PENDING' | 'REJECTED' | 'ALLOWED';
  export type RequestParticipants = {
    id: number;
    nickname: string;
    profileImage: string;
  };
  export type SenderId = {
    id: number;
    nickname: string;
    profileImage: string;
  };
  export type RequestMeetingListByMeContent = {
    title: string;
    message: string;
    requestParticipants: RequestParticipants[];
    boardId: number;
    createdAt: string;
    updatedAt: string;
    senderId: SenderId;
    participantStatus: ParticipantStatus;
  };
  export type RequestMeetingListByMe = {
    size: number;
    content: RequestMeetingListByMeContent[];
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageable: {
      offset: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      unpaged: boolean;
    };
    first: boolean;
    last: boolean;
    numberOfElements: number;
    empty: boolean;
  };
}
