declare namespace res {
  export type Friend = {
    id: string;
    profile: string;
    nickName: string;
    email?: string;
    friend?: boolean;
  };
  export type FriendList = res.Success<Friend[]>;
  export type DeleteFriend = res.Success<number>;
  export type FriendRequest = {
    friendRequestId: number;
    profile: string;
    name: string;
  };
  export type FriendRequestList = res.Success<Friend[]>;
  export type SearchedFriend = res.Success<Friend[]>;
}
