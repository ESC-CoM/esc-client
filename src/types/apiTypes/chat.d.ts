declare namespace req {
  export type CreateChatRoom = {
    boardId: number;
    body: {
      name: string;
      participants: number[];
    };
  };
}

declare namespace res {
  export type UserInfoDto = {
    id: number;
    nickname: string;
    profileImage: string;
  };

  export type CreateChatRoom = {
    status: string;
    message: string;
    data: {
      id: string;
      name: string;
      participants: UserInfoDto[];
    };
  };
}
