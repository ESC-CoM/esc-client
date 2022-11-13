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

  type Participant = {
    id: number;
    nickname: string;
    profileImage: string;
  };

  type Message = {
    id: number;
    message: string;
    messageType: 'NOTICE' | 'MESSAGE';
    senderId: number;
  };

  type Board = {
    id: number;
    title: string;
    participants: Participant[];
  };

  export type getChatRoomInfo = {
    status: string;
    message: string;
    data: {
      board: Board;
      chat: Message[];
    };
  };
}
