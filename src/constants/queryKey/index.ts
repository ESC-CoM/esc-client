export const queryKey = {
  meetingListRegisteredByMe: ['meetingListRegisteredByMe'],
  checkEmailDuplicateFunc: (email: string) => {
    return ['checkEmailDuplicate', { email }];
  },
  checkNicknameDuplicateFunc: (nickname: string) => {
    return ['checkNicknameDuplicate', { nickname }];
  },
  registerFunc: (userInfo: req.UserInfo) => {
    return ['register', { ...userInfo }];
  },
};
