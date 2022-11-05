declare namespace req {
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
}

declare namespace res {
  export type RequestListForMeetingRegisteredByMeSuccess = {
    title: string;
    message: string;
    requestParticipants: {
      id: number;
      nickname: string;
      profileImage: string;
    }[];
    page: number;
  };
}
