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
  export type ParticipantStatus = 'PENDING' | 'REJECTED' | 'ALLOWED';
  export type MeetingParticipant = {
    id?: number;
    nickname: string;
    profileImage: string;
  };

  export type MeetingListPagination = {
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
  export type MeetingListTemplate<T> = {
    size: number;
    content: T[];
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageable: MeetingListPagination;
    first: boolean;
    last: boolean;
    numberOfElements: number;
    empty: boolean;
  };

  export type RequestMeetingListByMeContent = {
    title: string;
    requestParticipants: MeetingParticipant[];
    boardId: number;
    createdAt: string;
    participantStatus: ParticipantStatus;
  };
  export type RequestListForMeetingRegisteredByMeContent = {
    title: string;
    requestBoardId: number;
    requestParticipants: MeetingParticipant[];
    createdAt: string;
  };
  export type BoardListRegisteredByMeContent = {
    id: number;
    kind: string;
    title: string;
    message: string;
    registerParticipants: MeetingParticipant[];
    createdAt: string;
  };

  export type BoardListRegisteredByMe =
    MeetingListTemplate<BoardListRegisteredByMeContent>;

  export type RequestListForMeetingRegisteredByMe =
    MeetingListTemplate<RequestListForMeetingRegisteredByMeContent>;

  export type RequestMeetingListByMe =
    MeetingListTemplate<RequestMeetingListByMeContent>;
}
