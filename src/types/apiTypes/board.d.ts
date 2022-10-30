declare namespace req {
  export type BoardRequestedByMe = {
    page?: number;
    size?: number;
    sort?: string[];
    boardId?: number;
  };
}

declare namespace res {
  export type BoardRequestedByMeSuccess = {
    size: number;
    content: {
      title: string;
      message: string;
      requestParticipants: {
        id: number;
        nickname: string;
        profileImage: string;
      }[];
      boardId: number;
      createdAt: string;
      updatedAt: string;
      senderId: {
        id: number;
        nickname: string;
        profileImage: string;
      };
      participantStatus: 'PENDING' | 'REJECTED' | 'ALLOWED';
    }[];
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
