type Gender = 'men' | 'women';

declare namespace req {
  export type AllowOrRejectRequest = 'ALLOWED' | 'REJECTED';

  export type RequestListForMeetingRegisteredByMe = {
    boardId: number;
    params: {
      page?: number;
      size?: number;
      sort?: string[];
      boardId?: number;
      senderId?: number;
    };
  };

  export type RequestMeetingByMe = {
    page?: number;
    size?: number;
    sort?: string[];
    boardId?: number;
  };

  export type BoardListRegisteredByMe = {
    page?: number;
    size?: number;
    sort?: string[];
    headCount?: number;
    gender?: Gender;
    university?: string;
    meetingStatus?: 'PENDING' | 'ALLOWED' | 'REJECTED';
  };
}

declare namespace res {
  export type AllowOrRejectRequest = {
    status: number;
    message: string;
    data: null;
  };
  export type RequestByMe = {
    status: string;
    message: string;
    data: null;
  };
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
  export type RequestMeetingListPagination = {
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
  export type RequestListForMeetingRegisteredByMeContent = {
    title: string;
    message: string;
    requestBoardId: number;
    requestParticipants: RequestParticipants[];
    createdAt: string;
    updatedAt: string;
  };
  export type MeetingListTemplate<T> = {
    size: number;
    content: T[];
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageable: RequestMeetingListPagination;
    first: boolean;
    last: boolean;
    numberOfElements: number;
    empty: boolean;
  };

  export type BoardListRegisteredByMe = {
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    size: number;
    content: {
      id: number;
      title: string;
      content: string;
      headCount: number;
      gender: Gender;
      meetingStatus: 'PENDING' | 'ALLOWED' | 'REJECTED';
      participants: string[];
      createdAt: string;
      university: string;
    }[];
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

  export type RequestListForMeetingRegisteredByMe =
    MeetingListTemplate<RequestListForMeetingRegisteredByMeContent>;

  export type RequestMeetingListByMe =
    MeetingListTemplate<RequestMeetingListByMeContent>;
}
