declare namespace res {
  export type FriendList = {
    status: string;
    message: string;
    data: {
      friendShipId: number;
      nickName: string;
      profile: string;
    };
  };
  export type DeleteFriend = {
    status: string;
    message: string;
    data: number;
  };
  export type FriendRequest = {
    friendRequestId: number;
    profile: string;
    name: string;
  };
  export type FriendRequestList = {
    status: string;
    message: string;
    data: FriendRequest[];
  };
}
