declare namespace res {
  export type Friend = {
    id: string;
    profile: string;
    nickName: string;
    email?: string;
    friend?: boolean;
  };
  export type FriendList = {
    status: string;
    message: string;
    data: Friend[];
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
    data: Friend[];
  };
  export type SearchedFriend = {
    status: string;
    message: string;
    data: Friend[];
  };
}
